'use client'

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { motion } from 'framer-motion'

function Products() {
  const [products, setProd] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://dummyjson.com/products')
      const res = await data.json()
      setProd(res)
    }
    fetchData()
  }, [])

  if (!products)
    return (
      <div className="flex h-screen items-center justify-center ">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-[#6B46C1]">loading...</div>
      </div>
    )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" min-h-screen"
    >
      <ProductList prod={products.products} />
    </motion.div>
  )
}

export default Products