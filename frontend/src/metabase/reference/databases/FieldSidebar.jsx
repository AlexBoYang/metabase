/* eslint "react/prop-types": "warn" */
import React from "react";
import PropTypes from "prop-types";
import S from "metabase/components/Sidebar.css";

import Breadcrumbs from "metabase/components/Breadcrumbs.jsx";
import SidebarItem from "metabase/components/SidebarItem.jsx"

import cx from 'classnames';
import pure from "recompose/pure";

const FieldSidebar =({
    database,
    table,
    field,
    style,
    className
}) =>
    <div className={cx(S.sidebar, className)} style={style}>
        <ul>
            <div className={S.breadcrumbs}>
                <Breadcrumbs
                    className="py4"
                    crumbs={[[database.name, `/reference/databases/${database.id}`],
                             [table.name,`/reference/databases/${database.id}/tables/${table.id}`],
                             [field.name]]}
                    inSidebar={true}
                    placeholder="Data Reference"
                />
            </div>
                <SidebarItem key={`/reference/databases/${database.id}/tables/${table.id}/fields/${field.id}`}
                             href={`/reference/databases/${database.id}/tables/${table.id}/fields/${field.id}`}
                             icon="document"
                             name="Details" />
                <SidebarItem key={`/xray/field/${field.id}/approximate`}
                             href={`/xray/field/${field.id}/approximate`}
                             icon="document"
                             name="X-ray this Field" />
        </ul>
    </div>

FieldSidebar.propTypes = {
    database:          PropTypes.object,
    table:          PropTypes.object,
    field:          PropTypes.object,
    className:      PropTypes.string,
    style:          PropTypes.object,
};

export default pure(FieldSidebar);
