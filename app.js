

const container = document.querySelector("#container");

const apiKey = '8de318d802f4483ea62b85039d07373f';
const categories = ["top","business","general","health","science","sports", "technology", "gaming","politics","education","food","finance"];



categories.forEach(cat =>{
  axios(`https://newsapi.org/v2/top-headlines?category=${cat}&language=en&apiKey=${apiKey}`)
  .then((res)=>{
   res.data.articles.map((cat)=>{
    return  container.innerHTML+= `<div class="news-card">
  <img src="${cat.
urlToImage}" alt="News 2" />
  <div class="news-content">
    <h2 class="news-title"> Title : ${cat.title}</h2>
    <p class="news-description">
      Description :${cat.description}
    </p>
    <div class="read-more">
      <a href="${cat.url}" target="_blank">Read more &raquo;</a>
    </div>
  </div>
  <br/>
  <br/>
</div>`
   })
  
console.log(res.data.articles);
  })
  .catch(err => console.error(err));

})