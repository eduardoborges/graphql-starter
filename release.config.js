const { execSync } = require('child_process');

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

console.log(`branch: ${branch}`);

module.exports = {
  baseBranch: 'main',
  branches: [
    { name: 'main', prerelease: false },
    { name: 'develop', prerelease: true },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    '@semantic-release/git',
  ],
  tagFormat: '${version}',
};
