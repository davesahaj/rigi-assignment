/*=============================================
=              Global Utilities              =
=============================================*/

/*----------  utlity to add parameters to url  ----------*/
export function createUrlParameters(url, parameters) {
  const paramString = Object.keys(parameters)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
    )
    .join('&');

  return url + '?' + paramString;
}
