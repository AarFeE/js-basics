const products = []
let id = 1
const regexFilter = new RegExp(/\b(palabra1|palabra2|palabra3|palabra4|palabra5)\b/ig)


// MAIN EXECUTION


while (true) {
    let option = prompt("Insert the number of the option:\n\n" +
        "1. Add New Product\n" +
        "2. Duplicate Product\n" +
        "3. Show Products / Look For One\n" +
        "4. Update Product\n" +
        "5. Delete Product\n" +
        "6. Verify Product Supplies\n" +
        "7. Sell Product\n" +
        "8. Buy Products\n" +
        "9. Inventory Total Value\n" +
        "10. Products Sorting\n" +
        "11. Products Description Filtering\n" +
        "12. General Products Report\n" +
        "13. Finish")


    if (option == "13") {
        alert("Thanks For Prefering Us!")
        break
    }


    else if (option == "1") {
        let newProduct = newEditProduct(id)

        products.push(newProduct)
        id++

        alert(`ADDED PRODUCT\n\n ${getProductInfo(products, products.length - 1)}`)
    }


    else if (option == "2" && products.length != 0) {
        // let foundProd = findProduct("Insert the name of the product you wanna duplicate:")

        // if (foundProd) {
        //     let dupConf = confirm(`FOUND PRODUCT\n\n${getProductInfo(products, products.indexOf(foundProd))}\n\nAre you sure you wanna duplicate it?`)
        //     let tempName = foundProd.name

        //     if (dupConf) {
        //         let theProd = structuredClone(foundProd)
        //         let cont = 1
        //         tempName += " COPY"

        //         products.forEach((product) => {
        //             if (product.name == `${tempName} ${cont}`) {
        //                 cont++
        //             }
        //         })

        //         theProd.name = `${tempName} ${cont}`
        //         theProd.id = id

        //         products.push(theProd)
        //         id++

        //         alert("Product successfully duplicated")
        //     }
        // } else {
        //     alert("No product has the inserted name!")
        // }


        let foundProd = findProduct("Insert the name of the product you wanna duplicate:")

        if (foundProd) {
            let dupConf = confirm(`FOUND PRODUCT\n\n${getProductInfo(products, products.indexOf(foundProd))}\n\nAre you sure you wanna duplicate it?`)

            if (dupConf) {
                dupProd = structuredClone(foundProd)
                const regexProd = new RegExp(`^[A-Z0-9]+ COPY \\d+$`)

                if (regexProd.test(dupProd.name)) { //Checks if the given string coincides with the regex pattern for already created copies and removes its number in case it's one
                    dupProd.name = dupProd.name.replace(/\d+$/, '')
                } else {
                    dupProd.name += ' COPY '
                }

                let cont = 1
                for (let i = 0; i < products.length; i++) { //Gets an unused number for the copy
                    if (products[i].name == dupProd.name + cont) {
                        cont++
                        i = 0
                    }
                }

                dupProd.name += cont
                dupProd.id = id++
                products.push(dupProd)

                alert("Product successfully duplicated")
            }
        } else {
            alert("No product has the inserted name!")
        }
    }


    else if (option == "3" && products.length != 0) {
        let thirdOpt = prompt("Insert the number of the option:\n\n" +
            "1. Show Products\n" +
            "2. Look For A Product")

        if (thirdOpt == 1) {
            alert(`ALL PRODUCTS\n\n${getAllProductsInfo()}`)
        }

        else if (thirdOpt == 2) {
            let foundProd = findProduct("Insert the name of the product you wanna visualize:")

            if (foundProd != undefined) {
                alert(`FOUND PRODUCT\n\n${getProductInfo(products, products.indexOf(foundProd))}`)
            } else {
                alert("No product has the inserted name!")
            }
        }
    }


    else if (option == "4" && products.length != 0) {
        let foundProd = findProduct("Insert the name of the product you wanna update:")

        if (foundProd != undefined) {
            let dupConf = confirm(`FOUND PRODUCT\n\n${getProductInfo(products, products.indexOf(foundProd))}\n\nAre you sure you wanna update it?`)
            if (dupConf) {
                products[foundProd.id - 1] = newEditProduct(foundProd.id)
                alert("Product Successfully Updated!")
            }
        } else {
            alert("No product has the inserted name!")
        }
    }


    else if (option == "5" && products.length != 0) {
        let foundProd = findProduct("Insert the name of the product you wanna delete:")

        if (foundProd != undefined) {
            delCon = confirm(`FOUND PRODUCT ${getProductInfo(products, products.indexOf(foundProd))}\n\nAre you sure you wanna permanently remove this product?`)

            if (delCon) {
                products.splice(products.indexOf(foundProd), products.indexOf(foundProd))
                alert("Product Successfully Deleted")
            }
        }
    }


    else if (option == "6" && products.length != 0) {
        let foundProd = findProduct("Insert the name of the product which supplies you wanna check:")
        if (foundProd != undefined) {
            alert(`FOUND PRODUCT\n\nNAME: ${foundProd.name}\nUNITIES LEFT: ${foundProd.stock}`)
        } else {
            alert("No product has the inserted name!")
        }
    }


    else if (option == "7" && products.length != 0) {
        let foundProd = findProduct("Insert the name of the product you wanna sell:")
        if (foundProd != undefined) {
            let toSell = promptNumber(`Insert the amount of ${foundProd.name} to sell (Current Stock: ${foundProd.stock})`)
            if (toSell <= foundProd.stock) {
                foundProd.stock -= toSell
                alert(`SUCCESSFUL SELL\n\nLeft unities of ${foundProd.name}: ${foundProd.stock}`)
            } else {
                alert("Not enough unities left for this sell!")
            }
        } else {
            alert("No product has the inserted name!")
        }
    }


    else if (option == "8" && products.length != 0) {
        let foundProd = findProduct("Insert the name of the product you wanna buy:")
        if (foundProd != undefined) {
            let toBuy = promptNumber(`Insert the amount of ${foundProd.name} to buy (Current Stock: ${foundProd.stock})`)
            foundProd.stock += toBuy
            alert(`SUCCESSFUL PURCHASE\n\nTotal unities of ${foundProd.name}: ${foundProd.stock}`)
        } else {
            alert("No product has the inserted name!")
        }
    }

    else if (option == "9" && products.length != 0) {
        let accum = 0
        products.forEach((product) => {
            accum += product.price * product.stock
        })

        alert(`INVENTORY TOTAL VALUE\n\n$${accum}`)
    }

    else if (option == "10" && products.length != 0) {
        let sortDir = confirm("Click 'Ok' to Sort Ascending (a-z, 1-9)\nOr 'Cancel' to Sort Descending (z-a, 9-1)'")
        let sortBy = prompt("Insert the category to sort by:\n\n1. Name\n2. Price\n3. Stock")
        let sortedInfo = ""
        let sortedArray = structuredClone(products)

        if (sortBy == '1') {
            if (sortDir) {
                sortedArray.sort((a, b) => a.name.localeCompare(b.name))
                sortedInfo += "SORTED PRODUCTS BY NAME ASCENDING"
            } else {
                sortedArray.sort((a, b) => b.name.localeCompare(a.name))
                sortedInfo += "SORTED PRODUCTS BY NAME DESCENDING"
            }
        }

        if (sortBy == '2') {
            if (sortDir) {
                sortedArray.sort((a, b) => a.price - b.price)
                sortedInfo += "SORTED PRODUCTS BY PRICE ASCENDING"
            } else {
                sortedArray.sort((a, b) => b.price - a.price)
                sortedInfo += "SORTED PRODUCTS BY PRICE DESCENDING"
            }
        }

        if (sortBy == '3') {
            if (sortDir) {
                sortedArray.sort((a, b) => a.stock - b.stock)
                sortedInfo += "SORTED PRODUCTS BY STOCK ASCENDING"
            } else {
                sortedArray.sort((a, b) => b.stock - a.stock)
                sortedInfo += "SORTED PRODUCTS BY STOCK DESCENDING"
            }
        }

        sortedArray.forEach((product) => {
            sortedInfo += `\n\nID: ${product.id}\nName: ${product.name}\nPrice: $${product.price}\nStock: ${product.stock}\nDescription: ${product.description}`
        })

        alert(sortedInfo)
    }


    else if (option == "11" && products.length != 0) {
        let filteredArray = filterArray()
        let filteredMsg = ""

        filteredArray.forEach((product, i) => {
            filteredMsg += `${getProductInfo(filteredArray, i)}\n`
        })

        alert(`PRODUCTS WITH UNFILTERED DESCRIPTIONS\n\n${filteredMsg}`)
    }


    else if (option == "12" && products.length != 0) {
        let totalProds = products.length
        let totalProfanity = filterArray().length
        let totalProfit = 0
        let avgPrice = 0
        let avgStock = 0
        let highPrice = 0
        let lowPrice = 0
        let highStock = 0
        let lowStock = 0

        products.forEach((product) => {
            totalProfit += product.stock * product.price
            avgPrice += product.price
            avgStock += product.stock
        })

        avgPrice /= products.length
        avgStock /= products.length

        products.forEach((product) => {
            if (product.price >= avgPrice) {
                highPrice++
            } else {
                lowPrice++
            }

            if (product.stock >= avgStock) {
                highStock++
            } else {
                lowStock++
            }
        })

        alert(`GENERAL PRODUCTS REPORT\n\n` +
            `Products Amount: ${totalProds}\n` +
            `Descriptions With Potential Profanity: ${totalProfanity}\n` +
            `Inventory Total Value: ${totalProfit}\n` +
            `Cheapest Products: ${lowPrice}\n` +
            `Most Expensive Products: ${highPrice}\n` +
            `Low Stock Products: ${lowStock}\n` +
            `Big Stock Products: ${highStock}`)
    }


    else {
        if (products.length == 0) {
            alert("You haven't added any products yet!")
        } else {
            alert("Not A Valid Option!")
        }
    }
}


// FUNCTIONS


function promptNumber(msg) {
    while (true) {
        let isNum = Number(prompt(msg))

        if (isNaN(isNum)) {
            alert("The inserted value wasn't a number!")
        } else {
            return isNum
        }
    }
}


function findProduct(msg) {
    let findProd = prompt(msg).toUpperCase()
    let prod = getProduct(findProd)

    return prod
}


function checkName(msg) {
    while (true) {
        let name = prompt(msg).toUpperCase()
        let found = false

        products.forEach((product) => {
            if (product.name == name) {
                found = true
                return
            }
        })

        if (found) {
            alert("There's already a product with the inserted name!")
        } else {
            return name
        }
    }
}


function newEditProduct(theId) {
    let prodName = checkName("Insert the product's name:")
    let prodPrice = promptNumber("Insert the product's price:")
    let prodQuant = promptNumber("Insert the product's stock:")
    let prodDesc = prompt("Insert the product's description:")

    let theProduct = {
        id: theId,
        name: prodName,
        price: prodPrice,
        stock: prodQuant,
        description: prodDesc
    }

    return theProduct
}


function getProductInfo(anArray, index) {
    let product = anArray[index]

    let prodInfo = ""
    Object.entries(product).forEach((ent) => {
        prodInfo += `${ent[0].toUpperCase()}: ${ent[1]}\n`
    })

    prodInfo = prodInfo.replaceAll(regexFilter, '*')

    return prodInfo
}


function getAllProductsInfo() {
    let prodsInfo = ""

    products.forEach((product) => {
        prodsInfo += `ID: ${product.id}\nNAME: ${product.name}\nPRICE: $${product.price}\nSTOCK: ${product.stock}\nDESCRIPTION: ${product.description}\n\n`
    })

    prodsInfo = prodsInfo.replaceAll(regexFilter, '*')

    return prodsInfo
}


function getProduct(findName) {
    let foundProd

    products.forEach((product) => {
        if (product.name == findName) {
            foundProd = product
            return
        }
    })

    return foundProd
}

function filterArray() {
    let filteredArray = products.filter((product) => regexFilter.test(product.description))

    return filteredArray
}