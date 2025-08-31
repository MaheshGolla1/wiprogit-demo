import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Button, Badge, Modal, Form, Nav, Tab } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: 'ACTIVE'
  });
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    duration: ''
  });

  useEffect(() => {
    fetchUsers();
    fetchServices();
    fetchAppointments();
  }, []);

  const fetchUsers = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockUsers = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'PATIENT',
          status: 'ACTIVE',
          createdAt: '2024-01-01'
        },
        {
          id: 2,
          name: 'Dr. Jane Smith',
          email: 'jane@example.com',
          role: 'PROVIDER',
          status: 'ACTIVE',
          createdAt: '2024-01-02'
        },
        {
          id: 3,
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'ADMIN',
          status: 'ACTIVE',
          createdAt: '2024-01-01'
        }
      ];
      setUsers(mockUsers);
    } catch (error) {
      toast.error('Failed to fetch users');
    }
  };

  const fetchServices = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockServices = [
        {
          id: 1,
          name: 'Physical Therapy',
          description: 'Comprehensive physical therapy sessions',
          category: 'THERAPY',
          price: 120,
          duration: '60 minutes',
          status: 'ACTIVE'
        },
        {
          id: 2,
          name: 'Massage Therapy',
          description: 'Relaxing massage therapy',
          category: 'MASSAGE',
          price: 80,
          duration: '45 minutes',
          status: 'ACTIVE'
        }
      ];
      setServices(mockServices);
    } catch (error) {
      toast.error('Failed to fetch services');
    }
  };

  const fetchAppointments = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockAppointments = [
        {
          id: 1,
          patientName: 'John Doe',
          providerName: 'Dr. Jane Smith',
          service: 'Physical Therapy',
          date: '2024-01-15',
          time: '10:00 AM',
          status: 'CONFIRMED'
        },
        {
          id: 2,
          patientName: 'Alice Johnson',
          providerName: 'Dr. Mike Wilson',
          service: 'Massage Therapy',
          date: '2024-01-16',
          time: '2:00 PM',
          status: 'PENDING'
        }
      ];
      setAppointments(mockAppointments);
    } catch (error) {
      toast.error('Failed to fetch appointments');
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        // Update existing user
        const updatedUsers = users.map(user =>
          user.id === selectedUser.id ? { ...user, ...userFormData } : user
        );
        setUsers(updatedUsers);
        toast.success('User updated successfully');
      } else {
        // Add new user
        const newUser = {
          id: Date.now(),
          ...userFormData,
          createdAt: new Date().toISOString().split('T')[0]
        };
        setUsers([...users, newUser]);
        toast.success('User added successfully');
      }
      setShowUserModal(false);
      setSelectedUser(null);
      setUserFormData({ name: '', email: '', role: '', status: 'ACTIVE' });
    } catch (error) {
      toast.error('Failed to save user');
    }
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedService) {
        // Update existing service
        const updatedServices = services.map(service =>
          service.id === selectedService.id ? { ...service, ...serviceFormData } : service
        );
        setServices(updatedServices);
        toast.success('Service updated successfully');
      } else {
        // Add new service
        const newService = {
          id: Date.now(),
          ...serviceFormData,
          status: 'ACTIVE'
        };
        setServices([...services, newService]);
        toast.success('Service added successfully');
      }
      setShowServiceModal(false);
      setSelectedService(null);
      setServiceFormData({ name: '', description: '', category: '', price: '', duration: '' });
    } catch (error) {
      toast.error('Failed to save service');
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setUserFormData(user);
    setShowUserModal(true);
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setServiceFormData(service);
    setShowServiceModal(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    toast.success('User deleted successfully');
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
    toast.success('Service deleted successfully');
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' } : user
    ));
    toast.success('User status updated');
  };

  const getStatusBadge = (status) => {
    const variants = {
      'ACTIVE': 'success',
      'INACTIVE': 'danger',
      'CONFIRMED': 'success',
      'PENDING': 'warning',
      'CANCELLED': 'danger',
      'COMPLETED': 'info'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  const getRoleBadge = (role) => {
    const variants = {
      'ADMIN': 'danger',
      'PROVIDER': 'primary',
      'PATIENT': 'info'
    };
    return <Badge bg={variants[role] || 'secondary'}>{role}</Badge>;
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      <p className="text-muted">Welcome back, {user?.name || 'Administrator'}!</p>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3>{users.length}</h3>
              <p className="text-muted">Total Users</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3>{services.length}</h3>
              <p className="text-muted">Total Services</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3>{appointments.length}</h3>
              <p className="text-muted">Total Appointments</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3>{appointments.filter(a => a.status === 'CONFIRMED').length}</h3>
              <p className="text-muted">Confirmed Appointments</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Tab.Container id="admin-tabs" defaultActiveKey="users">
        <Row>
          <Col md={12}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="users">Users Management</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="services">Services Management</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appointments">Appointments Overview</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Tab.Content>
          <Tab.Pane eventKey="users">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Users Management</h5>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setShowUserModal(true)}
                >
                  Add User
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{getRoleBadge(user.role)}</td>
                        <td>{getStatusBadge(user.status)}</td>
                        <td>{user.createdAt}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="outline-primary"
                            onClick={() => handleEditUser(user)}
                            className="me-1"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant={user.status === 'ACTIVE' ? 'outline-warning' : 'outline-success'}
                            onClick={() => toggleUserStatus(user.id)}
                            className="me-1"
                          >
                            {user.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="services">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Services Management</h5>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setShowServiceModal(true)}
                >
                  Add Service
                </Button>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map(service => (
                      <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.category}</td>
                        <td>{service.duration}</td>
                        <td>${service.price}</td>
                        <td>{getStatusBadge(service.status)}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="outline-primary"
                            onClick={() => handleEditService(service)}
                            className="me-1"
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="appointments">
            <Card>
              <Card.Header>
                <h5 className="mb-0">Appointments Overview</h5>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Provider</th>
                      <th>Service</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.providerName}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.date} {appointment.time}</td>
                        <td>{getStatusBadge(appointment.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* User Modal */}
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedUser ? 'Edit User' : 'Add New User'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUserSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={userFormData.name}
                onChange={(e) => setUserFormData({ ...userFormData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={userFormData.email}
                onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })}
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    value={userFormData.role}
                    onChange={(e) => setUserFormData({ ...userFormData, role: e.target.value })}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="PATIENT">Patient</option>
                    <option value="PROVIDER">Provider</option>
                    <option value="ADMIN">Admin</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={userFormData.status}
                    onChange={(e) => setUserFormData({ ...userFormData, status: e.target.value })}
                    required
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUserModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {selectedUser ? 'Update' : 'Add'} User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Service Modal */}
      <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedService ? 'Edit Service' : 'Add New Service'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleServiceSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                value={serviceFormData.name}
                onChange={(e) => setServiceFormData({ ...serviceFormData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={serviceFormData.description}
                onChange={(e) => setServiceFormData({ ...serviceFormData, description: e.target.value })}
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={serviceFormData.category}
                    onChange={(e) => setServiceFormData({ ...serviceFormData, category: e.target.value })}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="THERAPY">Therapy</option>
                    <option value="MASSAGE">Massage</option>
                    <option value="FITNESS">Fitness</option>
                    <option value="NUTRITION">Nutrition</option>
                    <option value="MENTAL_HEALTH">Mental Health</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., 60 minutes"
                    value={serviceFormData.duration}
                    onChange={(e) => setServiceFormData({ ...serviceFormData, duration: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                value={serviceFormData.price}
                onChange={(e) => setServiceFormData({ ...serviceFormData, price: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {selectedService ? 'Update' : 'Add'} Service
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
