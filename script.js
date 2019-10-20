const companies=[
    {name:"Category One", category:"Finance",start:1981,end:2003},
    {name:"Category Two", category:"Retails",start:1992,end:2008},
    {name:"Category Three", category:"Auto",start:1999,end:2007},
    {name:"Category Four", category:"Retails",start:1989,end:2010},
    {name:"Category Five", category:"Technology",start:2009,end:2014},
    {name:"Category Six", category:"Finance",start:1987,end:2010},
    {name:"Category Seven", category:"Auto",start:1986,end:1996},
    {name:"Category Eight", category:"Finance",start:2011,end:2016},
    {name:"Category Nine", category:"Technology",start:1981,end:1989},
    {name:"Category Ten", category:"Technology",start:2018,end:1990},
]

const ages=[33,12,21,5,15,40,47,36,16,18,20];

//for
//foreach
//filter
//map
//sort
//reduce


//affichage des des chiffres superieur ou egale à 21
const sup21=[];
for(let i=0;i<ages.length;i++){
  if(ages[i]>=21){
      sup21.push(ages[i]);
  }
}
//console.log("sup21",sup21);


//affichage des companies dont la categorie est finance
const filterCategory=[];

for(let i=0; i<companies.length;i++){
   if(companies[i].category==="Technology"){
    filterCategory.push(companies[i]);
   }
}
//console.log("filterCategory",filterCategory);


//boucler avec foreach
const filterCategories=[];
companies.forEach(function(company){
    if(company.category==="Technology"){
        filterCategories.push(company);
    }
   
})

//console.log('filterCategories',filterCategories);


//filtrer mes tableaux avec filter

const filterAge=ages.filter(function(age){
    if(age<=21){
        return true;
    }
});

//console.log("filterAge",filterAge);

//filtrer les compagnies


// const compagniesFilter=companies.filter(function(company){
//     if(company.category==="Technology"){
//         return true;
//     }
// });


//console.log("compagniesFilter",compagniesFilter);


//Using arrow function this is beautiful


//const compagniesFilter=companies.filter(company=>company.category==="Technology");
//console.log('compagniesFilter',compagniesFilter);


//filter companie year

const compagniesFilter=companies.filter(company=>company.start>=1992 && company.end>=2010);
//console.log('compagniesFilter',compagniesFilter);


//using map 
const test=companies.map(function(company){
        return `${company.category}`;
});

//console.log("name",test);
    

const trie=companies.sort(function(a1,a2){
    if(a1.start > a2.start){
        return 1;
    }else{
        return -1;
    }
});

//console.log("trie",trie);

//const sort=companies.sort((a,b)=>a.start>b.start);

//const unSort=companies.sort((a,b)=>a-b);
const unSort=companies.sort((a,b)=>b-a);
console.log("unSort",unSort);
   