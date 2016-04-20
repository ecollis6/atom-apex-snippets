'use babel';

import ApexSnippetsView from './apex-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  apexSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.apexSnippetsView = new ApexSnippetsView(state.apexSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.apexSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'apex-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.apexSnippetsView.destroy();
  },

  serialize() {
    return {
      apexSnippetsViewState: this.apexSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('ApexSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
