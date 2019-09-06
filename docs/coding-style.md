CSS
===

# Variables contruction:
e.g native css vars:
  --text-color--default:
  --text-color--main:
  --cont-sizes--default:

e.g scss vars:
  $text-color--default:
  $text-color--main:
  $cont-sizes--default:

${type}-{prop}--{modifier}

type defines how can use that variable:
  $cont for boxmodel
  $text for textnode

prop defines which css prop is target:
e.g:
  -color for text color or background-color
  -family for text family type

modifier defines different contexts for props:
e.g:
  --main for UI main components
  --secondary for UI complementary components
  --default for "default", always use it if there is no specific modifier

# Good Pratices:

## Never use magic values:

- Always define a variable for non-semantic values:
  ```css
  /* good */
  // foo.scss
  $cont-spaces--default: 20px;

  .foo {
    margin: $cont-spaces--default;
  }


  /* bad */
  .foo {
    margin: 20px;
  }
  ```

- If can, use already existents variables as base for specifics cases:
  ```css
  /* good */
  // main.scss
  $cont-spaces--default: 20px;

  // baz.scss
  .baz {
    margin: $cont-spaces--default / 2;
  }


  /* bad */
  .baz {
    margin: 10px;
  }
  ```

- Always increment the global "design system" specification in main.css with a variable
  if a specific value is repeatedly used over components:

  ```css
  /* good */
  // main.scss
  $cont-spaces--small: 10px;

  // baz.scss
  .baz {
    margin: $cont-spaces--small;
  }

  // foo.scss
  .foo {
    margin: $cont-spaces--small;
  }



  /* bad */
  .foo {
    margin: 10px;
  }

  .bar {
    margin: 10px;
  }

  /* bad */
  .foo {
    margin: $cont-spaces--default / 2;
  }

  .bar {
    margin: $cont-spaces--default / 2;
  }

  .baz {
    margin: $cont-spaces--default / 2;
  }
  ```
