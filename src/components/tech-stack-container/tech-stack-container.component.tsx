import NeomorphBlock, { BLOCK_TYPE } from '../neomorph-block/neomorph-block.component';
import TechStack from '../tech-stack/tech-stack.component';
import { stackData } from '../../dev-data/dev_data_stack';

import { BoxesContainer } from './tech-stack-container.styles';

const TechStackContainer = () => {
   return (
      <BoxesContainer>
         {/* <TechStack/> */}
         <NeomorphBlock/>
         <NeomorphBlock blockType={BLOCK_TYPE.small}/>
         <NeomorphBlock blockType={BLOCK_TYPE.big}/>

         {stackData.map(data => {
            const width = Math.round(Math.random() * 8) + 5;
            const height = Math.round(Math.random() * 8) + 5;
            return <TechStack key={data.id} text={data.text} bgColor={data.bgColor} color={data.textColor} height={height} width={width} img={data.imgSrc}/>
         }
         )}
      </BoxesContainer>
   )
}

export default TechStackContainer;