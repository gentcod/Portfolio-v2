import { Block, BlockBig, BlockSmall } from "./neomorph-block.style";

export const BLOCK_TYPE = {
   base: 'base',
   big: 'big',
   small: 'small',
}

const getBlock = (blockType = BLOCK_TYPE.base) => (
   {
      [BLOCK_TYPE.base]: Block,
      [BLOCK_TYPE.big]: BlockBig,
      [BLOCK_TYPE.small]: BlockSmall,
   }[blockType]
)

const NeomorphBlock = ({blockType}) => {
   const CustomBlock = getBlock(blockType)
   return (
      <CustomBlock/>
   )
}

export default NeomorphBlock;