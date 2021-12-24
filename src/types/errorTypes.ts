export enum ErrorMessagesEnum {
  NotFound = 'We could not find the resource on the server. Please try again or report the issue to the administrator.',
  ResourceNotFound = 'We could not find the resource on the server',
  BadRequest = 'Your request did not have a valid format. Please try again or report the issue to the administrator.',
  BadRequestWithMultipleErrors = 'Your request has multiple errors:',
  NotAuthenticated = 'Please authenticate in order to access this resource.',
  SignOut = 'Could not log you out. Please try again or report the issue to the administrator',
  Unknown = 'Something went wrong. Please try again or report the issue to the administrator.',
  SomethingWentWrong = 'Something went wrong',
  ReportToAdministrator = 'Please try again or report the issue to the administrator.',
  LoadProfile = 'We could not load your profile.',
  FetchMoreCalls = 'Could not fetch more calls, please try again.',
  CallNotFound = 'We could not find the call in the database.',
  MessagesSocketClosed = 'Connection to the live transcript could not be established, attempting to reconnect...',
  SavingNotes = 'Could not save your notes.',
  DeleteCall = 'Could not delete the call from the database. Please try again or report the issue to the administrator.',
  StartCall = 'Could not start the call. Please try again or report the issue to the administrator.',
  TransferCall = 'Could not transfer the call. Please try again or report the issue to the administrator.',
  SwitchBot = 'Could not transfer the virtual agent. Please try again or report the issue to the administrator.',
  EndCall = 'Could not end the call. Please try again or report the issue to the administrator.',
  AddCall = 'Could not add the call. Please try again or report the issue to the administrator.',
  AddCalls = 'Could not add the calls. Please try again or report the issue to the administrator.',
  UploadCalls = 'No call uploaded because some have the following errors:',
  SaveCallDisposition = 'Could not save the call disposition. Please try again or report the issue to the administrator.',
  SaveCallInterventionNote = 'Could not save the call intervention note. Please try again or report the issue to the administrator',
  ConnectAudio = 'We could not connect to the audio stream. Please try again or report the issue to the administrator.',
  GetExtractedInfo = 'Please take it manually from the transcript or report the issue to the administrator.',
  NoExtractedInfo = 'No extracted info is available. Please take it manually from the transcript or report the issue to the administrator.',
}

export enum errorCodesEnum {
  BadRequest = 400,
  NotAuthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  UnporcessableEntity = 422,
  FailedDependency = 424,
}

export enum sourceEnum {
  pointer = 'pointer',
  parameter = 'parameter',
}
export interface IErrorReponse {
  // Unique identifier for the error message
  id: string // ex: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'

  // It could be the HTTP status code
  // This helps the UI to key what it does with the error, it might show a notification for a 500, and a form field validation for a 400.
  // It also allows the UI to look up a text template for a message.
  code: errorCodesEnum // number, ex: 400

  // A written message for debugging purposes.
  // Not for the UI to display verbatim but just to help with people accessing the API outside of any UI.
  title: string // ex: "No user found with the mentioned credentials"

  // A map of key/value parameters for this error code.
  // This can provide values like a userId to fill into a text template.
  // It can also be used to additionally key behavior. For example on a 400 it might give a clue which field is in error.
  errors: IError[]
  // stacktrace obj
  stack?: any
}

export interface IError {
  // Used to indicate which part of the request document caused the error.
  // Can be used to attached the error message to the failling input
  //* Note that we are replacing the pointer connection character "/" with "." notation for better usage
  source: { [key in sourceEnum]?: string } // ex: POST { pointer: "data/attributes/firstName" }, GET { parameter: "posts" }

  // Short generic error message for the UI
  title: string // ex: "Value is too short"

  // Descriptive message of the error
  detail?: string // ex: "First name must contain at least three characters."
}
