import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.init()
CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
