import { Meteor } from "meteor/meteor";export const slashCommands = { commands: {} };slashCommands.add = function e(a, s, m = {}, r, o = false, n, i) {
  slashCommands.commands[a] = { command: a, callback: s, params: m.params, description: m.description, permission: m.permission, clientOnly: m.clientOnly || false, result: r, providesPreview: o, previewer: n, previewCallback: i };
};slashCommands.run = function e(a, s, m, r) {
  if (slashCommands.commands[a] && typeof slashCommands.commands[a].callback === "function") {
    if (!m || !m.rid) {
      throw new Meteor.Error("invalid-command-usage", "Executing a command requires at least a message with a room id.");
    }return slashCommands.commands[a].callback(a, s, m, r);
  }
};slashCommands.getPreviews = function e(a, s, m) {
  if (slashCommands.commands[a] && typeof slashCommands.commands[a].previewer === "function") {
    if (!m || !m.rid) {
      throw new Meteor.Error("invalid-command-usage", "Executing a command requires at least a message with a room id.");
    }const r = slashCommands.commands[a].previewer(a, s, m);
    if (typeof r !== "object" || !Array.isArray(r.items) || r.items.length === 0) {
      return;
    }if (r.items.length >= 10) {
      r.items = r.items.slice(0, 10);
    }return r;
  }
};slashCommands.executePreview = function e(a, s, m, r, o) {
  if (slashCommands.commands[a] && typeof slashCommands.commands[a].previewCallback === "function") {
    if (!m || !m.rid) {
      throw new Meteor.Error("invalid-command-usage", "Executing a command requires at least a message with a room id.");
    }if (!r.id || !r.type || !r.value) {
      throw new Meteor.Error("error-invalid-preview", "Preview Item must have an id, type, and value.");
    }return slashCommands.commands[a].previewCallback(a, s, m, r, o);
  }
};Meteor.methods({ slashCommand(e) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("error-invalid-user", "Invalid user", { method: "slashCommand" });
    }if (!e || !e.cmd || !slashCommands.commands[e.cmd]) {
      throw new Meteor.Error("error-invalid-command", "Invalid Command Provided", { method: "executeSlashCommandPreview" });
    }return slashCommands.run(e.cmd, e.params, e.msg, e.triggerId);
  } });