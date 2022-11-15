'use strict';
const STATUS = Object.freeze({
  NEW : "importer_new",
  UPLOADING : "importer_uploading",
  DOWNLOADING_FILE : "importer_downloading_file",
  FILE_LOADED : "importer_file_loaded",
  PREPARING_STARTED : "importer_preparing_started",
  PREPARING_USERS : "importer_preparing_users",
  PREPARING_CHANNELS : "importer_preparing_channels",
  PREPARING_MESSAGES : "importer_preparing_messages",
  USER_SELECTION : "importer_user_selection",
  IMPORTING_STARTED : "importer_importing_started",
  IMPORTING_USERS : "importer_importing_users",
  IMPORTING_CHANNELS : "importer_importing_channels",
  IMPORTING_MESSAGES : "importer_importing_messages",
  IMPORTING_FILES : "importer_importing_files",
  FINISHING : "importer_finishing",
  DONE : "importer_done",
  ERROR : "importer_import_failed",
  CANCELLED : "importer_import_cancelled"
});
export{
  STATUS as ProgressStep
};
const ImportWaitingStates = [STATUS.NEW, STATUS.UPLOADING, STATUS.DOWNLOADING_FILE];
export{
  ImportWaitingStates as ImportWaitingStates
};
const ImportFileReadyStates = [STATUS.FILE_LOADED];
export{
  ImportFileReadyStates as ImportFileReadyStates
};
const ImportPreparingStartedStates = [STATUS.PREPARING_STARTED, STATUS.PREPARING_USERS, STATUS.PREPARING_CHANNELS, STATUS.PREPARING_MESSAGES];
export{
  ImportPreparingStartedStates as ImportPreparingStartedStates
};
const ImportingStartedStates = [STATUS.IMPORTING_STARTED, STATUS.IMPORTING_USERS, STATUS.IMPORTING_CHANNELS, STATUS.IMPORTING_MESSAGES, STATUS.IMPORTING_FILES, STATUS.FINISHING];
export{
  ImportingStartedStates as ImportingStartedStates
};
const ImportingDoneStates = [STATUS.DONE, STATUS.ERROR, STATUS.CANCELLED];
export{
  ImportingDoneStates as ImportingDoneStates
};
const ImportingErrorStates = [STATUS.ERROR, STATUS.CANCELLED];
export{
  ImportingErrorStates as ImportingErrorStates
};

