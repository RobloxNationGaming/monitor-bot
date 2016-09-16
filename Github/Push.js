module.exports = payload => {
  let actor = payload.actor;
  let branch = payload.payload.ref.split('/')[2];
  let commits = payload.payload.commits;
  let commitCount = payload.payload.size;

  let msg = `⚡ **${actor.login}** pushed ${commitCount} commits to \`${branch}\`\n`;

  commits.forEach(commit => {
    console.log(commit.author);
    msg += `        \`${commit.sha.slice(1, 7)}\` ${commit.message} [${commit.author.username || actor.login}]`;
  });

  return msg;
}