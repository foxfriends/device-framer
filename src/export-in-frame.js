import dom, { getSelectedDocument, Artboard } from 'sketch/dom';
import UI from 'sketch/ui';

export default function() {
  const document = getSelectedDocument();
  if (!document) {
    UI.message('There is no document selected');
    return;
  }

  const selection = document.selectedLayers;
  if (selection.isEmpty) {
    UI.message('Select a layer to export');
    return;
  }

  let count = 0;
  for (const layer of selection.layers) {
    if (layer instanceof Artboard) {
      dom.export(layer, { scales: '1,2,3' });
      count++;
    }
  }

  UI.message(`${count} artboards exported!`);
}
