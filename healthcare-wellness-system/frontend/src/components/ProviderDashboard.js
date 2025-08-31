import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Button, Badge, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const ProviderDashboard = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    fetchAppointments();
    fetchServices();
  }, []);

  const fetchAppointments = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockAppointments = [
        {
          id: 1,
          patientName: 'John Doe',
          service: 'Physical Therapy',
          date: '2024-01-15',
          time: '10:00 AM',
          status: 'CONFIRMED'
        },
        {
          id: 2,
          patientName: 'Jane Smith',
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

  const fetchServices = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockServices = [
        {
          id: 1,
          name: 'Physical Therapy',
          description: 'Comprehensive physical therapy sessions',
          duration: '60 minutes',
          price: 120,
          category: 'THERAPY'
        },
        {
          id: 2,
          name: 'Massage Therapy',
          description: 'Relaxing massage therapy',
          duration: '45 minutes',
          price: 80,
          category: 'MASSAGE'
        }
      ];
      setServices(mockServices);
    } catch (error) {
      toast.error('Failed to fetch services');
    }
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedService) {
        // Update existing service
        const updatedServices = services.map(service =>
          service.id === selectedService.id ? { ...service, ...formData } : service
        );
        setServices(updatedServices);
        toast.success('Service updated successfully');
      } else {
        // Add new service
        const newService = {
          id: Date.now(),
          ...formData
        };
        setServices([...services, newService]);
        toast.success('Service added successfully');
      }
      setShowServiceModal(false);
      setSelectedService(null);
      setFormData({ name: '', description: '', duration: '', price: '', category: '' });
    } catch (error) {
      toast.error('Failed to save service');
    }
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setFormData(service);
    setShowServiceModal(true);
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
    toast.success('Service deleted successfully');
  };

  const updateAppointmentStatus = (appointmentId, status) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === appointmentId ? { ...appointment, status } : appointment
    ));
    toast.success('Appointment status updated');
  };

  const getStatusBadge = (status) => {
    const variants = {
      'CONFIRMED': 'success',
      'PENDING': 'warning',
      'CANCELLED': 'danger',
      'COMPLETED': 'info'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Provider Dashboard</h2>
      <p className="text-muted">Welcome back, {user?.name || 'Provider'}!</p>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Today's Appointments</h5>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Service</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>{appointment.patientName}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.time}</td>
                      <td>{getStatusBadge(appointment.status)}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-success"
                          onClick={() => updateAppointmentStatus(appointment.id, 'CONFIRMED')}
                          className="me-1"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => updateAppointmentStatus(appointment.id, 'CANCELLED')}
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">My Services</h5>
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
                    <th>Service</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(service => (
                    <tr key={service.id}>
                      <td>{service.name}</td>
                      <td>{service.duration}</td>
                      <td>${service.price}</td>
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
        </Col>
      </Row>

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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., 60 minutes"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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

export default ProviderDashboard;
