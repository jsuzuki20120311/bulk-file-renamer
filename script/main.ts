'use strict';

import Product from './models/Product';


class Application {

  public test() {
    return 1;
  }


  public start() : void {
    let product = new Product();
    product.sayHello();
  }

}

let app = new Application();
app.start();
