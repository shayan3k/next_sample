$(function ($) {
  axios({
    url: "https://boomarz.com/wp-json/wp/v2/posts?_embed",
    method: "get",
  })
    .then(async (res) => {
      res.data.forEach(async (item) => {
        console.log(item);

        let contents = {};

        try {
          contents.date = new Date(Date.parse(item.date)).toLocaleDateString();
          contents.link = item.link;
          contents.title = item.title.rendered;
          contents.excerpt = item.excerpt.rendered;
          contents.author = item._embedded.author[0]?.name;
          contents.commentsCount = item._embedded.replies?.length;
          contents.featuredImage = item.featured_image_url;
        } catch (e) {
          contents.date = new Date().toLocaleDateString();
          contents.link = "#";
          contents.title = "undefined";
          contents.excerpt = "undefined";
          contents.author = "undefined";
          contents.commentsCount = "undefined";
          contents.featuredImage = "undefined";
        }

        $(".owl-blog-posts")
          .owlCarousel(
            "add",
            `<div class="item px-2">
            <div class="iq-blog-box">
              <div class="iq-blog-image clearfix">
                <img
                  class="img-fluid center-block"
                  src="${contents.featuredImage}"
                  alt="#"
                  width="100"
                />
              </div>
              <div class="iq-blog-detail">
                <div class="blog-title">
                  <a
                    href="${contents.link}" target="_blank"
                    ><h5 class="iq-tw-7 iq-mb-10">${contents.title}</h5>
                  </a>
                </div>
                <div class="blog-content">
                 
                ${item.excerpt.rendered}
                </div>
                <div class="iq-blog-meta">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"
                        ><i class="fa fa-user-circle" aria-hidden="true"></i>
        ${contents.author}
                        </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"
                        ><i class="fa fa-calendar" aria-hidden="true"></i> ${contents.date}</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"
                        ><i class="fa fa-comment-o" aria-hidden="true"></i>${contents.commentsCount}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            </div>`
          )
          .owlCarousel("update");
      });
    })
    .catch((err) => {
      console.log("ajax err back", err);
    });
  return false;
});
