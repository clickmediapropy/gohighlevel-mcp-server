# 📚 Guía de Usuario - GoHighLevel MCP Server

## 🎯 Descripción General
Este servidor MCP proporciona **253 herramientas** para gestionar tu cuenta de GoHighLevel directamente desde Claude Desktop. Las herramientas están organizadas en las siguientes categorías principales.

---

## 📋 CATEGORÍAS DE HERRAMIENTAS

### 1️⃣ **GESTIÓN DE CONTACTOS** (31 herramientas)

#### **Operaciones Básicas de Contactos**
- `create_contact` - Crear un nuevo contacto
- `search_contacts` - Buscar contactos con filtros avanzados
- `get_contact` - Obtener información detallada de un contacto
- `update_contact` - Actualizar información del contacto
- `delete_contact` - Eliminar un contacto
- `upsert_contact` - Crear o actualizar contacto inteligentemente

#### **Gestión de Etiquetas**
- `add_contact_tags` - Agregar etiquetas a un contacto
- `remove_contact_tags` - Quitar etiquetas de un contacto
- `bulk_update_contact_tags` - Actualizar etiquetas masivamente

#### **Tareas del Contacto**
- `get_contact_tasks` - Obtener todas las tareas
- `create_contact_task` - Crear nueva tarea
- `update_contact_task` - Actualizar tarea existente
- `delete_contact_task` - Eliminar tarea
- `update_task_completion` - Marcar tarea como completada

#### **Notas del Contacto**
- `get_contact_notes` - Obtener todas las notas
- `create_contact_note` - Crear nueva nota
- `update_contact_note` - Actualizar nota
- `delete_contact_note` - Eliminar nota

#### **Operaciones Avanzadas**
- `get_duplicate_contact` - Detectar contactos duplicados
- `get_contacts_by_business` - Obtener contactos por negocio
- `get_contact_appointments` - Ver citas del contacto
- `bulk_update_contact_business` - Actualizar negocio masivamente
- `add_contact_followers` - Agregar seguidores
- `remove_contact_followers` - Quitar seguidores

#### **Campañas y Workflows**
- `add_contact_to_campaign` - Agregar a campaña
- `remove_contact_from_campaign` - Quitar de campaña
- `remove_contact_from_all_campaigns` - Quitar de todas las campañas
- `add_contact_to_workflow` - Agregar a workflow
- `remove_contact_from_workflow` - Quitar de workflow

---

### 2️⃣ **MENSAJERÍA Y CONVERSACIONES** (20 herramientas)

#### **Envío de Mensajes**
- `send_sms` - Enviar SMS (máx 1600 caracteres)
- `send_email` - Enviar email con adjuntos

#### **Gestión de Conversaciones**
- `search_conversations` - Buscar conversaciones
- `get_conversation` - Ver historial de mensajes
- `create_conversation` - Crear nueva conversación
- `update_conversation` - Marcar como leída/destacada
- `delete_conversation` - Eliminar conversación
- `get_recent_messages` - Ver mensajes recientes

#### **Gestión de Mensajes**
- `get_message` - Obtener detalles del mensaje
- `get_email_message` - Obtener detalles del email
- `update_message_status` - Actualizar estado de entrega
- `upload_message_attachments` - Subir archivos adjuntos
- `cancel_scheduled_message` - Cancelar mensaje programado
- `cancel_scheduled_email` - Cancelar email programado

#### **Mensajes Manuales**
- `add_inbound_message` - Registrar mensaje entrante
- `add_outbound_call` - Registrar llamada saliente

#### **Llamadas**
- `get_message_recording` - Obtener grabación de llamada
- `get_message_transcription` - Obtener transcripción
- `download_transcription` - Descargar transcripción

#### **Live Chat**
- `live_chat_typing` - Indicador de escritura

---

### 3️⃣ **OPORTUNIDADES DE VENTA** (10 herramientas)

- `search_opportunities` - Buscar oportunidades con filtros
- `get_pipelines` - Ver pipelines de venta
- `get_opportunity` - Ver detalles de oportunidad
- `create_opportunity` - Crear nueva oportunidad
- `update_opportunity` - Actualizar oportunidad
- `update_opportunity_status` - Cambiar estado (ganado/perdido)
- `delete_opportunity` - Eliminar oportunidad
- `upsert_opportunity` - Crear o actualizar inteligentemente
- `add_opportunity_followers` - Agregar seguidores
- `remove_opportunity_followers` - Quitar seguidores

---

### 4️⃣ **CALENDARIO Y CITAS** (45 herramientas)

#### **Gestión de Calendarios**
- `get_calendars` - Listar calendarios
- `get_calendar` - Ver detalles del calendario
- `create_calendar` - Crear calendario
- `update_calendar` - Actualizar calendario
- `delete_calendar` - Eliminar calendario

#### **Grupos de Calendario**
- `get_calendar_groups` - Listar grupos
- `create_calendar_group` - Crear grupo
- `update_calendar_group` - Actualizar grupo
- `delete_calendar_group` - Eliminar grupo
- `validate_group_slug` - Validar URL del grupo
- `disable_calendar_group` - Activar/desactivar grupo

#### **Citas**
- `get_calendar_events` - Ver eventos/citas
- `get_free_slots` - Ver disponibilidad
- `create_appointment` - Crear cita
- `get_appointment` - Ver detalles de cita
- `update_appointment` - Actualizar cita
- `delete_appointment` - Cancelar cita

#### **Bloqueo de Horarios**
- `create_block_slot` - Bloquear horario
- `update_block_slot` - Actualizar bloqueo
- `get_blocked_slots` - Ver horarios bloqueados

#### **Notas de Citas**
- `get_appointment_notes` - Ver notas
- `create_appointment_note` - Crear nota
- `update_appointment_note` - Actualizar nota
- `delete_appointment_note` - Eliminar nota

#### **Recursos de Calendario**
- `get_calendar_resources_equipments` - Ver equipos
- `create_calendar_resource_equipment` - Crear equipo
- `update_calendar_resource_equipment` - Actualizar equipo
- `delete_calendar_resource_equipment` - Eliminar equipo
- `get_calendar_resources_rooms` - Ver salas
- `create_calendar_resource_room` - Crear sala
- `update_calendar_resource_room` - Actualizar sala
- `delete_calendar_resource_room` - Eliminar sala

#### **Notificaciones**
- `get_calendar_notifications` - Ver notificaciones
- `create_calendar_notifications` - Crear notificaciones
- `get_calendar_notification` - Ver notificación específica
- `update_calendar_notification` - Actualizar notificación
- `delete_calendar_notification` - Eliminar notificación

---

### 5️⃣ **GESTIÓN DE BLOG** (7 herramientas)

- `get_blog_sites` - Listar sitios de blog
- `get_blog_posts` - Ver publicaciones
- `create_blog_post` - Crear publicación
- `update_blog_post` - Actualizar publicación
- `get_blog_authors` - Ver autores disponibles
- `get_blog_categories` - Ver categorías
- `check_url_slug` - Verificar disponibilidad de URL

---

### 6️⃣ **MARKETING POR EMAIL** (5 herramientas)

- `get_email_campaigns` - Ver campañas de email
- `get_email_templates` - Listar plantillas
- `create_email_template` - Crear plantilla
- `update_email_template` - Actualizar plantilla
- `delete_email_template` - Eliminar plantilla

---

### 7️⃣ **GESTIÓN DE UBICACIONES** (24 herramientas)

#### **Ubicaciones/Sub-cuentas**
- `search_locations` - Buscar ubicaciones
- `get_location` - Ver detalles
- `create_location` - Crear ubicación
- `update_location` - Actualizar ubicación
- `delete_location` - Eliminar ubicación

#### **Etiquetas de Ubicación**
- `get_location_tags` - Ver etiquetas
- `create_location_tag` - Crear etiqueta
- `get_location_tag` - Ver etiqueta específica
- `update_location_tag` - Actualizar etiqueta
- `delete_location_tag` - Eliminar etiqueta

#### **Campos Personalizados**
- `get_location_custom_fields` - Ver campos
- `create_location_custom_field` - Crear campo
- `get_location_custom_field` - Ver campo específico
- `update_location_custom_field` - Actualizar campo
- `delete_location_custom_field` - Eliminar campo

#### **Valores Personalizados**
- `get_location_custom_values` - Ver valores
- `create_location_custom_value` - Crear valor
- `get_location_custom_value` - Ver valor específico
- `update_location_custom_value` - Actualizar valor
- `delete_location_custom_value` - Eliminar valor

#### **Plantillas y Configuración**
- `get_location_templates` - Ver plantillas
- `delete_location_template` - Eliminar plantilla
- `search_location_tasks` - Buscar tareas
- `get_timezones` - Ver zonas horarias

---

### 8️⃣ **REDES SOCIALES** (17 herramientas)

#### **Gestión de Publicaciones**
- `search_social_posts` - Buscar publicaciones
- `create_social_post` - Crear publicación
- `get_social_post` - Ver publicación
- `update_social_post` - Actualizar publicación
- `delete_social_post` - Eliminar publicación
- `bulk_delete_social_posts` - Eliminar masivamente

#### **Cuentas Sociales**
- `get_social_accounts` - Ver cuentas conectadas
- `delete_social_account` - Desconectar cuenta
- `start_social_oauth` - Iniciar autenticación
- `get_platform_accounts` - Ver cuentas por plataforma

#### **Importación CSV**
- `upload_social_csv` - Subir CSV
- `get_csv_upload_status` - Ver estado de carga
- `set_csv_accounts` - Configurar cuentas para CSV

#### **Categorías y Etiquetas**
- `get_social_categories` - Ver categorías
- `get_social_category` - Ver categoría específica
- `get_social_tags` - Ver etiquetas
- `get_social_tags_by_ids` - Ver etiquetas por ID

**Plataformas Soportadas**: Facebook, Instagram, LinkedIn, Twitter, TikTok, Google Business

---

### 9️⃣ **BIBLIOTECA DE MEDIOS** (3 herramientas)

- `get_media_files` - Buscar archivos y carpetas
- `upload_media_file` - Subir archivo (máx 25MB)
- `delete_media_file` - Eliminar archivo/carpeta

---

### 🔟 **OBJETOS PERSONALIZADOS** (9 herramientas)

- `get_all_objects` - Ver todos los objetos
- `create_object_schema` - Crear esquema de objeto
- `get_object_schema` - Ver esquema
- `update_object_schema` - Actualizar esquema
- `create_object_record` - Crear registro
- `get_object_record` - Ver registro
- `update_object_record` - Actualizar registro
- `delete_object_record` - Eliminar registro
- `search_object_records` - Buscar registros

---

### 1️⃣1️⃣ **GESTIÓN DE PRODUCTOS** (10 herramientas)

- `ghl_create_product` - Crear producto
- `ghl_list_products` - Listar productos
- `ghl_get_product` - Ver producto
- `ghl_update_product` - Actualizar producto
- `ghl_delete_product` - Eliminar producto
- `ghl_create_price` - Crear precio
- `ghl_list_prices` - Listar precios
- `ghl_list_inventory` - Ver inventario
- `ghl_create_product_collection` - Crear colección
- `ghl_list_product_collections` - Listar colecciones

---

### 1️⃣2️⃣ **PAGOS Y FACTURACIÓN** (50+ herramientas)

#### **Órdenes y Transacciones**
- `list_orders` - Listar órdenes
- `get_order_by_id` - Ver orden
- `create_order_fulfillment` - Crear cumplimiento
- `list_order_fulfillments` - Listar cumplimientos
- `list_transactions` - Listar transacciones
- `get_transaction_by_id` - Ver transacción

#### **Suscripciones**
- `list_subscriptions` - Listar suscripciones
- `get_subscription_by_id` - Ver suscripción

#### **Cupones**
- `list_coupons` - Listar cupones
- `create_coupon` - Crear cupón
- `update_coupon` - Actualizar cupón
- `delete_coupon` - Eliminar cupón
- `get_coupon` - Ver cupón

#### **Facturas**
- `create_invoice` - Crear factura
- `list_invoices` - Listar facturas
- `get_invoice` - Ver factura
- `send_invoice` - Enviar factura
- `generate_invoice_number` - Generar número

#### **Presupuestos**
- `create_estimate` - Crear presupuesto
- `list_estimates` - Listar presupuestos
- `send_estimate` - Enviar presupuesto
- `create_invoice_from_estimate` - Convertir a factura
- `generate_estimate_number` - Generar número

#### **Plantillas de Facturación**
- `create_invoice_template` - Crear plantilla
- `list_invoice_templates` - Listar plantillas
- `get_invoice_template` - Ver plantilla
- `update_invoice_template` - Actualizar plantilla
- `delete_invoice_template` - Eliminar plantilla

#### **Programación de Facturas**
- `create_invoice_schedule` - Crear programación
- `list_invoice_schedules` - Listar programaciones
- `get_invoice_schedule` - Ver programación

---

### 1️⃣3️⃣ **ENVÍO Y LOGÍSTICA** (18 herramientas)

#### **Zonas de Envío**
- `ghl_create_shipping_zone` - Crear zona
- `ghl_list_shipping_zones` - Listar zonas
- `ghl_get_shipping_zone` - Ver zona
- `ghl_update_shipping_zone` - Actualizar zona
- `ghl_delete_shipping_zone` - Eliminar zona

#### **Tarifas de Envío**
- `ghl_get_available_shipping_rates` - Ver tarifas disponibles
- `ghl_create_shipping_rate` - Crear tarifa
- `ghl_list_shipping_rates` - Listar tarifas
- `ghl_get_shipping_rate` - Ver tarifa
- `ghl_update_shipping_rate` - Actualizar tarifa
- `ghl_delete_shipping_rate` - Eliminar tarifa

#### **Transportistas**
- `ghl_create_shipping_carrier` - Crear transportista
- `ghl_list_shipping_carriers` - Listar transportistas
- `ghl_get_shipping_carrier` - Ver transportista
- `ghl_update_shipping_carrier` - Actualizar transportista
- `ghl_delete_shipping_carrier` - Eliminar transportista

#### **Configuración de Tienda**
- `ghl_create_store_setting` - Crear configuración
- `ghl_get_store_setting` - Ver configuración

---

### 1️⃣4️⃣ **ASOCIACIONES Y RELACIONES** (10 herramientas)

- `ghl_get_all_associations` - Ver asociaciones
- `ghl_create_association` - Crear asociación
- `ghl_get_association_by_id` - Ver asociación por ID
- `ghl_get_association_by_key` - Ver asociación por clave
- `ghl_get_association_by_object_key` - Ver por objeto
- `ghl_update_association` - Actualizar asociación
- `ghl_delete_association` - Eliminar asociación
- `ghl_create_relation` - Crear relación
- `ghl_get_relations_by_record` - Ver relaciones
- `ghl_delete_relation` - Eliminar relación

---

### 1️⃣5️⃣ **CAMPOS PERSONALIZADOS V2** (9 herramientas)

- `ghl_get_custom_field_by_id` - Ver campo por ID
- `ghl_get_custom_fields_by_object_key` - Ver campos por objeto
- `ghl_create_custom_field` - Crear campo
- `ghl_update_custom_field` - Actualizar campo
- `ghl_delete_custom_field` - Eliminar campo
- `ghl_create_custom_field_folder` - Crear carpeta
- `ghl_update_custom_field_folder` - Actualizar carpeta
- `ghl_delete_custom_field_folder` - Eliminar carpeta

---

### 1️⃣6️⃣ **WORKFLOWS Y AUTOMATIZACIÓN** (2 herramientas)

- `ghl_get_workflows` - Ver workflows disponibles
- `ghl_get_surveys` - Ver encuestas
- `ghl_get_survey_submissions` - Ver respuestas de encuestas

---

### 1️⃣7️⃣ **VERIFICACIÓN Y UTILIDADES** (1 herramienta)

- `verify_email` - Verificar entregabilidad de email

---

## 📝 EJEMPLOS DE USO

### **Ejemplo 1: Crear un contacto con etiquetas**
```
"Crea un contacto llamado Juan Pérez con email juan@ejemplo.com, teléfono +595991234567 y agrégale las etiquetas 'cliente-vip' y 'newsletter'"
```

### **Ejemplo 2: Enviar SMS a un contacto**
```
"Envía un SMS al contacto [ID] con el mensaje: Hola! Tu cita está confirmada para mañana a las 10am"
```

### **Ejemplo 3: Buscar oportunidades abiertas**
```
"Muéstrame todas las oportunidades abiertas en el pipeline de Ventas Inmobiliarias"
```

### **Ejemplo 4: Crear una cita**
```
"Crea una cita para el contacto [ID] mañana a las 15:00 en el calendario principal"
```

### **Ejemplo 5: Gestión de blog**
```
"Crea un post de blog titulado 'Tendencias Inmobiliarias 2025' con contenido sobre el mercado actual"
```

---

## 🔑 INFORMACIÓN IMPORTANTE

### **Límites del Sistema**
- **SMS**: Máximo 1600 caracteres
- **Archivos**: Máximo 25MB para uploads
- **Búsquedas**: Máximo 100 resultados por consulta
- **Operaciones masivas**: Máximo 50 items a la vez

### **Estados de Oportunidades**
- `open` - Abierta
- `won` - Ganada
- `lost` - Perdida
- `abandoned` - Abandonada

### **Tipos de Mensajes**
- `TYPE_SMS` - Mensaje de texto
- `TYPE_EMAIL` - Correo electrónico
- `TYPE_CALL` - Llamada
- `TYPE_FACEBOOK` - Facebook Messenger
- `TYPE_INSTAGRAM` - Instagram Direct
- `TYPE_WHATSAPP` - WhatsApp
- `TYPE_LIVE_CHAT` - Chat en vivo

### **Estados de Publicación (Blog)**
- `DRAFT` - Borrador
- `PUBLISHED` - Publicado
- `SCHEDULED` - Programado
- `ARCHIVED` - Archivado

---

## 🚀 TIPS PARA MEJOR USO

1. **Usa búsquedas específicas** - Proporciona filtros precisos para obtener mejores resultados
2. **Verifica antes de eliminar** - Siempre confirma IDs antes de eliminar registros
3. **Usa upsert para actualizaciones inteligentes** - Evita duplicados con operaciones upsert
4. **Programa mensajes** - Aprovecha las funciones de programación para automatizar
5. **Agrupa operaciones** - Usa herramientas bulk para operaciones masivas
6. **Revisa mensajes no leídos** - Usa `get_recent_messages` regularmente
7. **Mantén etiquetas organizadas** - Usa un sistema consistente de etiquetas
8. **Documenta workflows** - Anota los IDs de workflows importantes

---

## ❓ SOPORTE

Si necesitas ayuda con alguna herramienta específica, simplemente pregunta:
- "¿Cómo uso la herramienta [nombre]?"
- "¿Qué parámetros necesita [herramienta]?"
- "Dame un ejemplo de [operación]"

---

**Última actualización**: Septiembre 2025
**Versión**: 1.0.0
**Total de herramientas**: 253