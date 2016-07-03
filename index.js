'use strict';
const slashCommand = function(s) {
  if (typeof s !== 'string') {
    throw new TypeError('Argument must be a string.');
  }
  var cmds = s.split(' ')[0].match(/\/([\w-=:.@]+)/ig);
  var slashcmds = null;
  var subcmds = null;
  var body = s.trim() || null;

  if (cmds) {
    slashcmds = cmds.join('');
    cmds = cmds.map(function(x) { return x.replace('/',''); });
    subcmds = cmds.length > 1 ? cmds.filter(function(v) { return v !== cmds[0]}) : null;
    body = s.split(' ').filter(function(v, i) {return i > 0}).join(' ').trim() || null;
  }

  return {
    slashcommand: slashcmds,
    command: cmds ? cmds[0] : null,
    subcommands: subcmds,
    body: body,
    original: s
  };
};

module.exports = slashCommand;
