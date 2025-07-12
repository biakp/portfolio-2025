"use client";

import React from "react";
import ProjectPageTemplate, { ProjectPageData } from "@/components/templates/ProjectPageTemplate";
import { 
  MessageSquare,
  Database,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  Cpu,
  Users
} from "lucide-react";

const whatsappProjectData: ProjectPageData = {
  title: "WhatsApp Automation",
  subtitle: "with n8n + Docker",
  description: "A sophisticated WhatsApp messaging workflow system built with n8n and Docker. Features automated message delivery, Google Sheets integration, conditional logic, and anti-spam protection for reliable business communication.",
  techStack: [
    "n8n",
    "Docker",
    "WhatsApp Business API",
    "Google Sheets API",
    "Node.js",
    "Webhook",
    "Self-hosted"
  ],
  features: [
    {
      icon: MessageSquare,
      title: "Automated Messaging",
      description: "Send personalized WhatsApp messages automatically based on triggers and conditions.",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Google Sheets Integration",
      description: "Seamlessly pull contact data and message templates from Google Sheets.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Self-hosted Security",
      description: "Complete control over your data with Docker containerization for enhanced security.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Smart Workflows",
      description: "Advanced conditional logic and error handling for reliable automation.",
      color: "text-accent"
    }
  ],
  stats: [
    { label: "Response Time", value: "< 2s", description: "Average message delivery", icon: Clock },
    { label: "Success Rate", value: "99.8%", description: "Message delivery success", icon: CheckCircle },
    { label: "Containers", value: "3", description: "Docker services running", icon: Cpu },
    { label: "Integrations", value: "5+", description: "Connected services", icon: Users }
  ],
  technicalDetails: [
    {
      title: "Architecture",
      content: "Containerized microservices architecture using Docker Compose for easy deployment and scaling. N8n workflow engine orchestrates the entire messaging pipeline."
    },
    {
      title: "Data Flow", 
      content: "Google Sheets → N8n Workflow → WhatsApp Business API → Message Delivery. Real-time status updates and error handling ensure message reliability."
    },
    {
      title: "Security",
      content: "Self-hosted solution with encrypted communications, API key management, and rate limiting to prevent spam and ensure compliance."
    }
  ],
  githubUrl: "https://github.com/biakp",
  isCompleted: true,
  pageTitle: "WhatsApp Automation with n8n + Docker | Beatriz Knabben",
  metaDescription: "Custom WhatsApp messaging workflow using n8n, self-hosted in Docker. Automates message delivery based on Google Sheets data with advanced conditional logic."
};

export default function WhatsAppAutomationProject() {
  return <ProjectPageTemplate data={whatsappProjectData} />;
}
