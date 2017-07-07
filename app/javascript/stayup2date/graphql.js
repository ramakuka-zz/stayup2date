import Lokka from 'lokka'
import Transport from 'lokka-transport-http'

export default class Graphql {
  constructor() {
    // create a new Lokka client
    this.client = new Lokka({
      transport: new Transport('http://localhost:5000/graphql'),
    })

    // Get the initial data from the transport (it's a promise)
    this.dataPromise = this.client
      // invoke the GraphQL query to get all the items
      .query(
        `
        {root{name}}
      `
      )
      .then(res => res.root)
  }
  getAll() {
    // get all the items but we clone the content inside the promise
    return this.dataPromise.then(items => items.concat([]))
  }
}
