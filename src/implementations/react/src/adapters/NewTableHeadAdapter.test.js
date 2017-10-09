import React from 'react'
import {mount} from 'enzyme'

import * as HIG from 'hig-vanilla'

import TableHeadAdapter from './NewTableHeadAdapter';
import SlotHeadCell from './NewSlotHeadCellAdapter'
import TextHeadCell from './NewTextHeadCellAdapter'

describe('TableHeadAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <TableHeadAdapter
          higInstance={mockInstance}
          selected={true}
        >
          <SlotHeadCell width="60px">
            <div> text content</div>
          </SlotHeadCell>
          <TextHeadCell  text="test" alignment="right" width="1fr" />  
        </TableHeadAdapter>
      );

      mount(
        <TableHeadAdapter
          higInstance={mockInstance}
          selected={false}
        >
          <SlotHeadCell>
            <div> text content</div>
          </SlotHeadCell>
          <TextHeadCell  text="test" alignment="right"/>  
        </TableHeadAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.Table._partials.TableHead);
  });
});