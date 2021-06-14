import stylelint from 'stylelint';

describe('Smoke', () => {
  const getExtendedConfig = (code: string) => ({
    code,
    config: {
      extends: ['./stylelintrc.js'],
    },
    configBasedir: __dirname,
  });

  const process = async (code: string): Promise<string> => {
    const result = await stylelint.lint({
      ...getExtendedConfig(code),
      fix: true,
    });
    return result.output;
  };

  it('maps styles', async () => {
    expect(
      await process(`
    declaration-order {   
    --fill-1: #FFF;
    --fill-2: #FFF;  
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    --color: #FFF;
    
    grid-row-start:4;
    order:1;
    z-index:2;
    grid-row:3;
    grid-gap:4;
    
    /* Box Model */
    display: block;
    float: right;
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    
    /* Typography */
    color: #888;
    font: normal 16px Helvetica, sans-serif;
    line-height: 1.3;
    text-align: center;
    
    /* Visual */
    background-color: #eee;
    border-radius: 4px;
    border: 1px solid #888;    
    opacity: 1;
    
    @media (min-width: 100px) {}
    
    --stroke: #FFF; 
    
    @media (min-width: 100px) {}
    
    /* Animation */
    transition: all 1s;
    
    /* Misc */
    user-select: none;
}`)
    ).toMatchInlineSnapshot(`
      "
          declaration-order {   
          --fill-1: #FFF;
          --fill-2: #FFF;
          
          --color: #FFF;
          
          --stroke: #FFF;
          grid-row:3;
          grid-row-start:4;  
          /* Positioning */
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index:2;

          order:1;
          
          /* Box Model */
          display: block;
          grid-gap:4;
          float: right;

          width: 100px;
          height: 100px;
          margin: 10px;
          padding: 10px;
          
          /* Typography */
          color: #888;
          font: normal 16px Helvetica, sans-serif;
          line-height: 1.3;
          text-align: center;

          border: 1px solid #888;
          border-radius: 4px;
          
          /* Visual */
          background-color: #eee;    

          opacity: 1;
          
          /* Misc */
          user-select: none;
          
          /* Animation */
          transition: all 1s;
          
          @media (min-width: 100px) {} 
          
          @media (min-width: 100px) {}
      }"
    `);
  });
});
