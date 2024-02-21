
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Button, Form, Breadcrumb } from 'react-bootstrap';
import Table from "react-bootstrap-table-next";
import Pagination, { PaginationListStandalone, PaginationProvider, PaginationTotalStandalone, SizePerPageDropdownStandalone } from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import { Routes } from "routes";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import NewClient from "./newClient";
import { UserService } from "service/users";
import useAuth from "context/auth";

export default function ClientsPage() {
    const history = useHistory();
    const { user } = useAuth();

    const [showNewClient, setShowNewClient] = useState(false);

    const [users, setUsers] = useState([]);

    const columns = [
        { dataField: "id", text: "ID", hidden: true },
        { dataField: "nome_usuario", text: "Nome" },
        { dataField: "email", text: "Email" },
        { dataField: "whatsapp", text: "Celular" },
        { dataField: "nivel", text: "Nível" },
        {
            dataField: "id", text: "Ação",
            formatter: (cell, data) => <Button className="p-1" 
            onClick={() => history.push({
                pathname: Routes.Clients.details,
                state: data
            })}
            variant=""> <IoMenu size={22} /></Button>, align: 'start'
        },
    ];


    useEffect(() => {
        if(user){
            ListUsers();
        }
    },[user])

    const ListUsers = () => {
        UserService.listResales(user?.id_revenda)
        .then(({ data }) => {
            setUsers(data)
        })
    }

    const customTotal = (from, to, size) => (
        <div>
            {from} - {to} de {size} Clientes
        </div>
    );

    const customSizePerPage = (props) => {
        const { options, currentSizePerPage, onSizePerPageChange } = props;

        const onPageChange = (e) => {
            const page = e.target.value;
            onSizePerPageChange(page);
        }

        return (
            <Row as="label">
                <Col xs="auto">
                    <Form.Select value={currentSizePerPage} onChange={onPageChange} className="pe-5">
                        {[100, 500, 1000, 5000].map(o => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                <Col xs="auto" className="d-flex align-items-center ps-0">
                    Resultado por página
                </Col>
            </Row>
        );
    };

    return (
        <>
            <div className="py-4">
                <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                    <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
                    <Breadcrumb.Item active>Clientes</Breadcrumb.Item>
                </Breadcrumb>
                <div className="d-flex justify-content-between w-100 flex-wrap">
                    <div className="mb-3 mb-lg-0">
                        <h4>Lista de cliente</h4>
                        <p className="mb-0">
                            Dados essenciais sobre os clientes.
                        </p>
                    </div>
                    <div>
                        <div className="d-inline-flex align-items-center gap-4">
                                <div>
                                    {users?.length} de {users?.length} Registros
                                </div>
                            <div>
                                <Button 
                                variant="outline-gray-600" 
                                className="d-inline-flex align-items-center w-100" onClick={setShowNewClient}>
                                    <FaPlusCircle className="icon icon-xs me-2" /> Adicionar novo cliente
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToolkitProvider
                keyField="id"
                search={true}
                columns={columns}
                data={users}

            >
                {({ baseProps, searchProps }) => (
                    <PaginationProvider pagination={
                        Pagination({
                            custom: true,
                            showTotal: true,
                            alwaysShowAllBtns: true,
                            totalSize: users?.length ?? 0,
                            withFirstAndLast: false,
                            paginationTotalRenderer: customTotal,
                            sizePerPageRenderer: customSizePerPage
                        })
                    }>
                        {({ paginationProps, paginationTableProps }) => (
                            <Card>
                                <div className="table-responsive py-4">
                                    <div className="dataTable-top">
                                        <div className="dataTable-dropdown">
                                            <SizePerPageDropdownStandalone
                                                custom={true}
                                                {...paginationProps} />
                                        </div>
                                        <div className="dataTable-search">
                                            <PaginationListStandalone {...paginationProps} />
                                        </div>
                                    </div>

                                    <Table
                                        {...baseProps}
                                        {...paginationTableProps}
                                        headerWrapperClasses="thead-light"
                                        bodyClasses="border-0"
                                        rowClasses="border-bottom"
                                        classes="table-flush dataTable-table"
                                    />
                                </div>
                            </Card>
                        )}
                    </PaginationProvider>
                )}
            </ToolkitProvider>
            <NewClient show={showNewClient} onClose={(created) => {
                if(created){
                    ListUsers();
                }
                setShowNewClient(null)    
            }}/>
        </>
    );
};
