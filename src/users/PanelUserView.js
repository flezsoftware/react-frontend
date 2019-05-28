import React from 'react';

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function PanelUserView(principal) {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <pre>{JSON.stringify(principal, null, 2)}</pre>
            </div>
        </div>
    );
}

export default PanelUserView;
