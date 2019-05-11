import React from 'react'
import PropTypes from 'prop-types'
import { EoblogPostTemplate } from '../../templates/eoblog-post'

const EoblogPostPreview = ({ entry, widgetFor }) => (
  <EoblogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EoblogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EoblogPostPreview
