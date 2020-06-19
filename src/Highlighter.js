import Highlighter from "react-highlight-words";
import React, { useState } from 'react';
import drug from './drugs';
import styled from 'styled-components';
import './highlighterStyle.css';
import * as _ from 'lodash';

const HighLighter = () => {

    const data = `Background. Trimethoprim sulfamethoxazole (TMP-SMX) is the preferred agent for Pneumocystis jirovecii pneumonia prophylaxis in immunocompromised hosts (ICH). However, TMP-SMX is frequently avoided due to an adverse drug reaction (ADR) history. We report on a novel multicentre programmatic approach to TMP-SMX ADRs in ICH. Methods. We reviewed ICH with a reported TMP-SMX ADR referred to the conjoint antibiotic allergy services at Austin Health (Melb, Aus) and Peter MacCallum Cancer Centre (Melb, Aus) between April 2015 and May 2018. ICH were defined as patients with a history of cancer, transplantation, autoimmune-condition or prednisolone use > 20 mg day for 1 month. Patients were assessed and managed as per the TMPSMX ADR protocol (Figure 1). Results. Eighteen patients were assessed, of which 16 (89%) underwent allergy testing (6;89% patch testing [PT] and/or 9;56% oral rechallenge [OC]) and 2 (11%) successful desensitization. Of those that underwent allergy testing, 10 (63%) were cancer patients, four (25%) solid-organ transplant recipients, one (6%) HIV and one (6%) multiple sclerosis. The median age was 59 (IQR 49.5, 65) and predominate phenotypes were severe cutaneous adverse drug reactions (4; 22%) and maculopapular exanthema (MPE) (11; 61%). Eighty-nine percent (8/9) of OC patients tolerated TMP-SMX challenge. One patient experienced a recurrence of a mild self-resolving localized rash following TMP-SMX OC. Of those seven patients that did not undergo OC, two (29%) were PT positive and five (72%) histories of severe or recent T-cellmediated allergy. Three of the seven patients who did not undergo OC received and tolerated dapsone. Conclusion. A novel TMP-SMX ADR protocol was able to identify ICH with severe allergy phenotypes and provide alternative antibiotic sulphonamide therapeutic options, whilst safely rechallenging the majority with low-risk TMP-SMX ADR histories. (Figure Preseted).`;

    const drugTerm = drug.map(d => d.term);
    // const drugType = [... new Set(drug.map(data => data.type))];

    const style = { color: 'red' }

    const HighLightTag = ({ children, highlightIndex }) => {

        const type = _.filter(drug, ['term', children]);
        const isDrug = type[0].type === 'drug' ? true : false

        const HighLightTagStyle = {
            backgroundColor: 'pink',
            color: isDrug ? 'green' : 'red',
            zIndex: { highlightIndex }
        }
        return <strong style={HighLightTagStyle}>{children}</strong>
    }

    return (
        <div>
            <Highlighter
                // highlightClassName= "highlighterStyle"
                highlightTag={HighLightTag}
                // activeIndex={2}
                highlightStyle={style}
                searchWords={drugTerm}

                autoEscape={true}
                textToHighlight={data}
            />
        </div>
    );
};
HighLighter.propTypes = {

};
export default HighLighter;