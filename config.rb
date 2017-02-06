# time zone
Time.zone = "Tokyo"

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

###
# Helpers
###

activate :blog do |blog|
  blog.permalink = 'articles/{year}/{month}/{day}-{title}.html'
  blog.sources = "articles/{year}/{month}/{day}-{title}.html"
  blog.taglink = "categories/{tag}.html"
  blog.layout = "article_layout"
  blog.default_extension = ".md"
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

# feed
page "/feed.xml", layout: false

configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end

# repository
set :css_dir, 'articles/stylesheets'
set :js_dir, 'articles/javascripts'
set :images_dir, 'articles/images'

# path create
activate :directory_indexes

# layout
page "/articles/*", layout: :article_layout
