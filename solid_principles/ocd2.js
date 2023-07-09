

class Products {
    constructor() {
        this.items = [
            {'name': 'Apple', 'color': 'green', 'size': 10},
            {'name': 'Mango', 'color': 'yellow', 'size': 8},
            {'name': 'Banana', 'color': 'yellow', 'size': 6},
            {'name': 'Grape', 'color': 'purple', 'size': 2},
            {'name': 'Orange', 'color': 'orange', 'size': 12},
            {'name': 'Strawberry', 'color': 'red', 'size': 4},
            {'name': 'Watermelon', 'color': 'green', 'size': 20}
        ]        
    }

    addProduct({ name, color, size }) {
        this.items.push({ name: name, color: color, size: size})
    }

    filter(spec) {
        return this.items.filter(item => spec.isSatisfied(item))
    }

    /**
     * Below code is basically violating open closed principle, because here
     * you are modifying it each requirements
     */

    // 1 Requirements: filter by color:

    // filterByColor(color) {
    //     const filteredItems = this.items.filter(function(item) {
    //         return item.color === color
    //     })

    //     return filteredItems
    // }

    // now here if you get requirement that filter by this condition then
    // you will make another function for it

    // filterBySize(size) {
    //     const filteredItems = this.items.filter(function(item) {
    //         return item.size === size
    //     })

    //     return filteredItems
    // }
}

const products = new Products();
// filter by color
// console.log(products.filterByColor('green'));
// console.log(products.filterBySize(4));


// better way of doing this could be by implementing

class Specification {
    isSatisfied() {
        throw new Error('Override this function')
    }
}

class ColorSpecification extends Specification {
    constructor(color){
        super();
        this.color = color
    }

    isSatisfied(item) {
        return item.color === this.color
    }
}

class SizeSpecification extends Specification {
    constructor(size){
        super();
        this.size = size
    }

    isSatisfied(item) {
        return item.size === this.size
    }
}

class AndSpecification extends Specification {
    constructor(...specs) {
        super()
        this.specs = specs
    }

    isSatisfied(item) {
        return this.specs.every(spec => spec.isSatisfied(item))
    }
}

const redColor = new ColorSpecification('red');
const size = new SizeSpecification(4);

const andSpec = new AndSpecification(redColor, size)


console.log(products.filter(andSpec));