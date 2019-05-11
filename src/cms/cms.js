import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import EoblogPostPreview from './preview-templates/EoblogPostPreview'
import EoproductPagePreview from './preview-templates/EoproductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('eoproducts', EoproductPagePreview)
CMS.registerPreviewTemplate('eoblog', EoblogPostPreview)
