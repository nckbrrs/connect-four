// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend

import React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { RenderPage } from 'next/dist/shared/lib/utils'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet()
    const originalRenderPage: RenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}