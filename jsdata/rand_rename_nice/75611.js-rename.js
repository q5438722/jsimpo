'use strict';
import{
  HTTP as HTTP
}from "meteor/http";
import{
  settings as settings
}from "../../../settings";
import{
  callbacks as callbacks
}from "../../../callbacks";
import{
  Livechat as Livechat
}from "../lib/Livechat";
function render(blockArguments) {
  if (!settings.get("Livechat_RDStation_Token")) {
    return blockArguments;
  }
  const $scope = Livechat.getLivechatRoomGuestInfo(blockArguments);
  if (!$scope.visitor.email) {
    return blockArguments;
  }
  const unameOther = Array.isArray($scope.visitor.email) ? $scope.visitor.email[0].address : $scope.visitor.email;
  const options = {
    headers : {
      "Content-Type" : "application/json"
    },
    data : {
      token_rdstation : settings.get("Livechat_RDStation_Token"),
      identificador : "rocketchat-livechat",
      client_id : $scope.visitor._id,
      email : unameOther
    }
  };
  options.data.nome = $scope.visitor.name || $scope.visitor.username;
  if ($scope.visitor.phone) {
    options.data.telefone = $scope.visitor.phone;
  }
  if ($scope.tags) {
    options.data.tags = $scope.tags;
  }
  Object.keys($scope.customFields || {}).forEach((i) => {
    options.data[i] = $scope.customFields[i];
  });
  Object.keys($scope.visitor.customFields || {}).forEach((i) => {
    options.data[i] = $scope.visitor.customFields[i];
  });
  try {
    HTTP.call("POST", "https://www.rdstation.com.br/api/1.3/conversions", options);
  } catch (itemMoved) {
    console.error("Error sending lead to RD Station ->", itemMoved);
  }
  return blockArguments;
}
callbacks.add("livechat.closeRoom", render, callbacks.priority.MEDIUM, "livechat-rd-station-close-room");
callbacks.add("livechat.saveInfo", render, callbacks.priority.MEDIUM, "livechat-rd-station-save-info");

