const NUM_SECTIONS = 6

export const MAX_RGB = 255

/**
 * Gets the rainbow color in RGB given a normalized index (0.0-1.0)
 * @returns [r, g, b]
 */
export function getRGB(index: number) {
  const section = Math.floor(index * NUM_SECTIONS)
  const start = Math.round((index - (section / NUM_SECTIONS)) * NUM_SECTIONS * MAX_RGB) // index from start of section (0-1)
  const end = MAX_RGB - start // index from end of section (0-1)

  let colorArray // the rgb color array with colors that range from 0-1.
  switch (section) {
    case 0:
      colorArray = [255, start, 0]
      break
    case 1:
      colorArray = [end, 255, 0]
      break
    case 2:
      colorArray = [0, 255, start]
      break
    case 3:
      colorArray = [0, end, 255]
      break
    case 4:
      colorArray = [start, 0, 255]
      break
    default:
    case 5:
      colorArray = [255, 0, end]
      break
  }

  // Return the color
  return colorArray
}
