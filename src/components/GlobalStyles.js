import { createGlobalStyle } from 'styled-components'
import theme from '../../static/styles/theme'
// import { useTheme } from '../../static/styles/theme-context'
// const { theme, toggleTheme } = useTheme()

export const GlobalStyle = createGlobalStyle`
  #___gatsby {
    overflow-x:hidden;
  }
  body,
  .article {
    font-family: NeueMontreal, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.background}
    color: ${({ theme }) => theme.colors.text}
    -webkit-font-smoothing: antialiased;
    transition: color 1s cubic-bezier(0.72,0,0.28,1),background-color .65s cubic-bezier(0.72,0,0.28,1);
    will-change: background-color,color;
  }
  blockquote {
    border-left: 5px solid ${theme.colors.lightGrey};
    padding-left: 1.5rem;
    margin-left: 0px;
    margin-right: 1.5rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
  }
  }
  h1 {
    font-size: ${theme.fontSizes[11]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[9]};
    letter-spacing: ${theme.letterSpacings[0]};
    font-family: ${theme.fonts.sans}
  }
  h2 {
    font-size: ${theme.fontSizes[10]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[8]};
    letter-spacing: ${theme.letterSpacings[1]};
    font-family: ${theme.fonts.sans}
  }
  h3 {
    font-size: ${theme.fontSizes[9]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[7]};
    letter-spacing: ${theme.letterSpacings[0]};
    font-family: ${theme.fonts.sans};
    margin-bottom: ${theme.space[1]}

  }
  h4 {
    font-size: ${theme.fontSizes[8]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[6]};
    letter-spacing: ${theme.letterSpacings[5]};
    font-family: ${theme.fonts.sans};
    margin: 16px 0px;
  }
  h5 {
    font-size: ${theme.fontSizes[8]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[5]};
    letter-spacing: ${theme.letterSpacings[5]};
    margin: 16px 0px;
  }
  h6 {
    font-size: ${theme.fontSizes[7]};
    font-weight: ${theme.fontWeights[2]};
    line-height: ${theme.lineHeights[3]};
    letter-spacing: ${theme.letterSpacings[5]};
    margin: 8px 0px;
  }
  p {
    font-size: ${theme.fontSizes[6]};
    font-weight: 300;
    line-height: ${theme.lineHeights[4]};
    letter-spacing: ${theme.letterSpacings[7]};
    margin: 8px 0px;
  }
  li {
    padding: 8px 0px;
    font-size: ${theme.fontSizes[6]};
    font-weight: 500;
    line-height: ${theme.lineHeights[4]};
    letter-spacing: ${theme.letterSpacings[7]};
  }
  li p {
    margin:0px;
  }
  .outlinedFont {
    font-weight: 800;
    fill: transparent;
    stroke: white;
    font-style: italic;
    stroke-width: 0.3px;
    display: block;
    max-width: 1200px;
    margin: auto;
    stroke-dasharray: 1000;
  }

  .block-reveal-base {
    height: 100%;
    /* width: 100%; */
    animation-fill-mode: both;
  }

  /*  FLEXBOX GRID OVERRIDES  */

  .row {
    margin-left: 0px;
    margin-right: 0px;
  }

  .PDP-Description p{
    margin: 16px 0px
  }
  .PDP-Description img{
    width: 100%
  }
  .tl-wrapper {
    z-index: 5!important
  }
  .noise {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 1
}

.noise:after {
    content: "";
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpENjg0QjM3RTBGNjMxMUU4QkFFNzhFMURFMjdEQ0Q4OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OThGQTcwODNCMTIxMUVBOUQyNkVCMEI5QjgxNUE1NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OThGQTcwNzNCMTIxMUVBOUQyNkVCMEI5QjgxNUE1NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ZGE5OTYwZi1lYTRkLTQ3YzAtYTYxOS01MTYwZWUyZDQ1NjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDY4NEIzN0UwRjYzMTFFOEJBRTc4RTFERTI3RENEODkiLz4gPC9yZGY6RGVz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);
    background-position: 50%;
    position: absolute;
    left: -10rem;
    top: -10rem;
    will-change: transform;
    -webkit-animation: noise 1s steps(2) infinite;
    animation: noise 1s steps(2) infinite
}
@-webkit-keyframes noise {
    0% {
        transform: translate3d(0,9rem,0)
    }

    10% {
        transform: translate3d(-1rem,-4rem,0)
    }

    20% {
        transform: translate3d(-8rem,2rem,0)
    }

    30% {
        transform: translate3d(9rem,-9rem,0)
    }

    40% {
        transform: translate3d(-2rem,7rem,0)
    }

    50% {
        transform: translate3d(-9rem,-4rem,0)
    }

    60% {
        transform: translate3d(2rem,6rem,0)
    }

    70% {
        transform: translate3d(7rem,-8rem,0)
    }

    80% {
        transform: translate3d(-9rem,1rem,0)
    }

    90% {
        transform: translate3d(6rem,-5rem,0)
    }

    to {
        transform: translate3d(-7rem,0,0)
    }
}

@keyframes noise {
    0% {
        transform: translate3d(0,9rem,0)
    }

    10% {
        transform: translate3d(-1rem,-4rem,0)
    }

    20% {
        transform: translate3d(-8rem,2rem,0)
    }

    30% {
        transform: translate3d(9rem,-9rem,0)
    }

    40% {
        transform: translate3d(-2rem,7rem,0)
    }

    50% {
        transform: translate3d(-9rem,-4rem,0)
    }

    60% {
        transform: translate3d(2rem,6rem,0)
    }

    70% {
        transform: translate3d(7rem,-8rem,0)
    }

    80% {
        transform: translate3d(-9rem,1rem,0)
    }

    90% {
        transform: translate3d(6rem,-5rem,0)
    }

    to {
        transform: translate3d(-7rem,0,0)
    }
}

code {
  color: #2d31db
}
  
`
