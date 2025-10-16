

const container = document.querySelector("#container");


const nav = document.querySelector("#navLinks");


const apiKey = '8de318d802f4483ea62b85039d07373f'


const categories = ["breaking news" ,"business","general","health","Datascience","sports", "technology", "gaming","politics","education","ai","markets","crypto","forex"];


const validCategories = ["business","entertainment","general","health","science","sports","technology"];


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
  })
  .catch(err => console.error("err=>",err));
});



categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat.toUpperCase();  
  btn.dataset.category = cat;           
  nav.appendChild(btn);                 

  btn.addEventListener("click", () => {
    container.innerHTML = ""; 

    const url = validCategories.includes(cat.toLowerCase())
      ? `https://newsapi.org/v2/top-headlines?category=${cat.toLowerCase()}&language=en&apiKey=${apiKey}`
      : `https://newsapi.org/v2/everything?q=${cat}&language=en&apiKey=${apiKey}`;

    axios(url)
      .then(res => {
        res.data.articles.forEach(news => {
          container.innerHTML += `
            <div class="news-card">
              <img src="${news.urlToImage || 'https://via.placeholder.com/150'}" alt="News">
              <div class="news-content">
                <h2>${news.title}</h2>
                <p>${news.description || "No description available."}</p>
                <a href="${news.url}" target="_blank">Read more &raquo;</a>
              </div>
            </div>
          `;
        });
      })
      .catch(err => console.error('err==>', err));
  });
});

