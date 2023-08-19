import { getRenderer } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { GithubSearch } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/misc/github/search.js';
import { ToCToggle } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { TabSelector } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from 'C:/Users/bilja/Documents/GitHub/noafd/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';

const components = {
  'HlgxJxeu404QOzdP+nbAAA==': ToCPrevNext,
  'ZfVxfS8wP2aLQPBwfCm9kQ==': GithubSearch,
  'vmXO2qyXE7OGKBZ1l1wW1w==': ToCToggle,
  'fa8lqBzdeEmdgBhuZ5Y/Sw==': DarkModeSwitch,
  'cJqZ8EJ6i6FEUinLxkREUQ==': ConfigTransport,
  'ohxsKBzefVezeocnjGtzqw==': TabSelector,
  'gFUnYe5hIdG2z35ilp196g==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
