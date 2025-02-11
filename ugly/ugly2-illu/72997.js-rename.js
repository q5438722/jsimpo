import _ from "lodash";import { login } from "passport/lib/http/request";import { Observable } from "rx";function login$(...o) {
  if (_.isFunction(_.last(o))) {
    return login.apply(this, o);
  }return Observable.fromNodeCallback(login).apply(this, o);
}export default function passportLogin() {
  return (o, r, t) => {
    o.login = o.logIn = login$;t();
  };
}
