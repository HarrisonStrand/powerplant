export default class TODO {
  static TODO() {
    return fetch(``)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}