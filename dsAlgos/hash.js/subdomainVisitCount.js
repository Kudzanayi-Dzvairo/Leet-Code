var subDomainVisit = cpdomains => {
    const domainMap = {}

    for(let i = 0; i < cpdomains.length; i++){

        const [visits, domain] = cpdomains[i].split(' ')
        
        // console.log(visits, domain)

        const subDomains = domain.split('.')

        // console.log(subDomains)

        for(let j = 0; j < subDomains.length; j++){
            console.log(subDomains[j])
            const subDomain = subDomains.slice(j).join('.')
            console.log(subDomains)
            !domainMap[subDomain]
            ? domainMap[subDomain] = +visits
            : domainMap[subDomain] += +visits

            console.log(domainMap)
        }
    }
   return Object.keys(domainMap).map(keys => `${domainMap[keys]} ${keys}`)

}

console.log(subDomainVisit(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))