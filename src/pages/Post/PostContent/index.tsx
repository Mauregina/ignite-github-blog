/* eslint-disable react/no-children-prop */
import rangeParser from 'parse-numeric-range'
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { PostContainer } from './styles'

interface PostContentProps {
  children: string
}

export const PostContent: React.FC<PostContentProps> = ({
  children,
}: PostContentProps) => {
  // const { colors } = useTheme()

  return (
    <PostContainer>
      <ReactMarkdown
        children={children}
        className="line-break"
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            if (!match) {
              return <code className={className} {...props} />
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Property 'meta' does not exist on type 'ElementData'
            const meta = node?.data?.meta as string | undefined

            const applyHighlights: lineTagPropsFunction = (highlights) => {
              if (!meta) {
                return {}
              }

              const regex = /{([\d,-]+)}/
              const metadata = meta.replace(/\s/g, '')
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : '0'

              const highlightLines = rangeParser(strlineNumbers)
              const data = highlightLines.includes(highlights)
                ? 'highlight'
                : undefined

              return { data }
            }

            return (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers
                wrapLines={!!meta}
                useInlineStyles
                lineProps={applyHighlights}
                children={String(children).replace(/\s$/g, '')}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: '#112131',
                      color: '#D5DCE3',
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: '#112131',
                      color: '#D5DCE3',
                    },
                  } as any
                }
                {...props}
              />
            )
          },
        }}
      />
    </PostContainer>
  )
}
