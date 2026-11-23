import { site } from '../data/seo'
import { footer } from '../data/home'
import { founders, investors } from '../data/about'
import { productBySlug } from '../routes'
import { productDetail } from '../data/products/details'

// schema.org markup (JSON-LD) for the pre-rendered pages: Organization on Home and About, LocalBusiness for
// each office on Contact, Product on each product page. Every fact here is already shown on the site; motor
// figures are left out because several are still placeholders in data/products/details.js.

const abs = (path) => new URL(path, site.url).href
const home = `${site.url}/`
const orgId = `${site.url}/#organization`
const contact = (scheme) => footer.contact.find((item) => item.href.startsWith(scheme))?.href.slice(scheme.length)
const telephone = contact('tel:')
const email = contact('mailto:')
const noQuery = (url) => url.split('?')[0]

const address = (office) => ({ '@type': 'PostalAddress', ...office.postal, addressCountry: 'IN' })
const orgRef = { '@type': 'Organization', '@id': orgId, name: site.name, url: home }

function organization(description) {
  return {
    ...orgRef,
    logo: abs(site.logo.src),
    description,
    // About page: "Founded in 2021 by Abhilash Maurya, Arnav Biswas, and Piyush Verma".
    foundingDate: '2021',
    founder: founders.people.map((person) => ({ '@type': 'Person', name: person.name, jobTitle: person.role, sameAs: person.linkedin })),
    funder: [investors.lead, ...investors.partners].map((investor) => ({ '@type': 'Organization', name: investor.name })),
    address: footer.offices.map(address),
    telephone,
    email,
    sameAs: footer.socials.map((social) => noQuery(social.href)),
  }
}

function offices() {
  return footer.offices.map((office, i) => ({
    '@type': 'LocalBusiness',
    '@id': `${site.url}/contact#office-${i + 1}`,
    name: `${site.name} ${office.title}`,
    url: abs('/contact'),
    image: abs(site.logo.src),
    telephone,
    email,
    address: address(office),
    hasMap: office.map,
    parentOrganization: orgRef,
  }))
}

function product(family, path) {
  const { variants } = productDetail(family.slug)
  const first = variants[0]
  return {
    '@type': 'Product',
    name: family.name,
    url: abs(path),
    image: abs(first.hero),
    description: first.subtitle ?? undefined,
    brand: { '@type': 'Brand', name: family.brand === 'Antarix' ? 'Antarix' : site.name },
    manufacturer: orgRef,
    category: first.spec.find((row) => row.label === 'Motor type')?.value,
    // The variant codes shown in each RF page's Choose The Variant panel.
    model: family.series === 'RF' ? variants.map((variant) => variant.code) : undefined,
  }
}

// The JSON-LD graph for a page, or null when the page has none. `siteDescription` is the site-wide meta
// description from index.html, used as the company description.
export function structuredData(path, siteDescription) {
  let graph = null
  if (path === '/') graph = [{ '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: home, publisher: orgRef }, organization(siteDescription)]
  else if (path === '/about') graph = [organization(siteDescription)]
  else if (path === '/contact') graph = offices()
  else if (productBySlug[path]) graph = [product(productBySlug[path], path)]
  return graph && { '@context': 'https://schema.org', '@graph': graph }
}
