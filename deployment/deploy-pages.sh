#!/usr/bin/env bash
set -euo pipefail

# Publish compiled files to the branch used by GitHub Pages (legacy mode).
cd "$(dirname "$0")/.."
repo_root="$(pwd)"
source_commit="$(git rev-parse HEAD)"
remote_url="$(git remote get-url origin)"

gh auth status
gh auth setup-git
pnpm lint
pnpm build:pages

publish_dir="$(mktemp -d -t finsage-pages.XXXXXX)"
trap 'rm -rf "$publish_dir"' EXIT
git init --quiet --initial-branch=gh-pages "$publish_dir"
git -C "$publish_dir" remote add origin "$remote_url"
git -C "$publish_dir" config user.name "$(git var GIT_AUTHOR_IDENT | sed 's/ <.*//')"
git -C "$publish_dir" config user.email "$(git var GIT_AUTHOR_IDENT | sed 's/.*<\(.*\)>.*/\1/')"

remote_branch="$(git ls-remote --heads "$remote_url" refs/heads/gh-pages)"
if [ -n "$remote_branch" ]; then
  git -C "$publish_dir" fetch --quiet origin gh-pages
  git -C "$publish_dir" reset --quiet --hard FETCH_HEAD
fi

# Only this disposable publication directory is cleared; source stays in place.
find "$publish_dir" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf -- {} +
cp -a "$repo_root/out/." "$publish_dir/"
touch "$publish_dir/.nojekyll"
printf '{"sourceCommit":"%s"}\n' "$source_commit" > "$publish_dir/deployment.json"
git -C "$publish_dir" add --all

if git -C "$publish_dir" diff --cached --quiet; then
  printf 'The static export is already published.\n'
else
  git -C "$publish_dir" commit --quiet -m "deploy: static export from $source_commit"
  git -C "$publish_dir" push origin HEAD:gh-pages
fi

printf 'Published branch: gh-pages. Check GitHub Pages for deployment completion.\n'
