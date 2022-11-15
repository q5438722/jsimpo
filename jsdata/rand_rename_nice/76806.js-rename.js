'use strict';
import{
  Migrations as Migrations
}from "../../../app/migrations";
import{
  Settings as Settings
}from "../../../app/models";
Migrations.add({
  version : 58,
  up() {
    Settings.update({
      _id : "Push_gateway",
      value : "https://rocket.chat"
    }, {
      $set : {
        value : "https://gateway.rocket.chat",
        packageValue : "https://gateway.rocket.chat"
      }
    });
  }
});

