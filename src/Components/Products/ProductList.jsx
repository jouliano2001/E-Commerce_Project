import React from 'react'
import ProductItem from './ProductItem'
import { motion } from 'framer-motion'

function ProductList({ prod }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="w-auto">
      <section>
        <div className="mx-auto flex flex-col align-middle justify-center items-center max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center items-center align-middle text-center'
          >
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#805AD5] to-[#5A67D8] sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-300">
            Explore our curated selection of high-quality products designed to meet your needs with style, durability, and performance.
            </p>
          </motion.header>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {prod.map((i) => (
              <motion.div key={i.id} variants={item}>
                <ProductItem item={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductList