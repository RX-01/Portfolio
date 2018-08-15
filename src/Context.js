import React, { Component } from 'react';

const context = React.createContext()



export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          title:'One',
          thumbnail:'one_thumbnail.png',
          description:'project description',
          gallery:[
            {
              img:'one_1',
              footnote:'itss there'
            },
            {
              img:'one_2',
              footnote:null
            }
          ]
        },
        {
          title:'Two',
          thumbnail:'one_thumbnail.png',
          description:'project description',
          gallery:[
            {
              img:'one_1',
              footnote:'itss there'
            },
            {
              img:'one_2',
              footnote:null
            }
          ]
        },
        {
          title:'Three',
          thumbnail:'three_thumbnail.png',
          description:'project description',
          gallery:[
            {
              img:'one_1',
              footnote:'itss there'
            },
            {
              img:'one_2',
              footnote:null
            }]
        },
      ],

    };
  }

  
  

  deleteContact = (info)=> {
    console.log(`Delete ${info.name}`);
    const { contacts } = this.state;
    const toDelete = contacts.filter( person => person.id !== info.id);
    this.setState({
      contacts:toDelete
    })
  }

  AddContact = (contact)=> {
    console.log(`Added ${contact.name}`);
    const { contacts } = this.state;

    this.setState({
      contacts:[contact,...contacts]
    })
  }



  render() {
    const Store = {
      contacts:this.state.contacts,
      deleteContact:this.deleteContact,
      AddContact:this.AddContact
    }

    return (
      <context.Provider value = {Store}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer