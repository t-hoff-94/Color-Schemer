import chroma from 'chroma-js'

const getRgba = (color) => {
  const rgba = 'rgba(' + color.join(',') + ')';
  return rgba;
}

const getCompColor = (color) => {
  const hslColor = chroma(color).hsl();
  let comp;
  const hsl = {
    h: hslColor[0],
    s: hslColor[1],
    l: hslColor[2],
  };
  if(hsl.h > 180) {
    comp = [hsl.h -180, hsl.s, hsl.l, 'hsl'];
  } else {
    comp = [hsl.h +180, hsl.s, hsl.l, 'hsl'];
  }
  //console.log(chroma(comp[0],comp[1],comp[2], 'hsl'));
  const compColor = chroma(comp[0],comp[1],comp[2],1, 'hsl');
  return compColor;
}

export { getRgba, getCompColor }
