// src/products/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body, NotFoundError, Put, Delete, UploadedFile } from 'routing-controllers'
import Product from './entity';

@JsonController()
export default class ProductController {

    @Get('/products')
    async allProducts() {

        const products = await Product.find()
        
        return products
    }


    @Get('/products/:id')
        getProduct(
        @Param('id') id: number
    ){
        return Product.findOneById(id)
    }
    
    @Put('/products/:id')
    async updateProduct(
        @Param('id') id: number,
        @Body() update: Partial<Product>
    ) {
    const product = await Product.findOneById(id)
        if (!product) throw new NotFoundError('Cannot find product')

        return Product.merge(product, update).save()
    }   

    @Post('/products')
    @HttpCode(201)
    async createAd(
        @Body() body: any,
        @UploadedFile('file') file: any) {

            //need to convert file into  URL to be readable when fetching

            const newAd = new Product()
            newAd.picture = file.originalname
            newAd.title = body.title
            newAd.description = body.description
            newAd.price = body.price
    
        return await newAd.save()
    }

    @Delete('/products/:id')
    async removeProduct(
        @Param('id') id: number
    ) {
    const remove = await Product.findOneById(id)
        if (!remove) throw new NotFoundError('Cannot find product')

        return Product.removeById(id)
    }
}

