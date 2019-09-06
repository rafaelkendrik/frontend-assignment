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
