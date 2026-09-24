import cleaning from './cleaning'
import twoWheeler from './two-wheeler'
import threeWheeler from './three-wheeler'
import agriculture from './agriculture'

// Industry pages by URL path. The navbar's Industry menu links here.
export const industryPages = [cleaning, agriculture, twoWheeler, threeWheeler]

export const industryPath = (slug) => `/industry/${slug}`
